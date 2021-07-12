
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.core import serializers
from django.http import HttpResponseRedirect, HttpResponse
from django.views.generic import View, TemplateView, ListView, CreateView, UpdateView, DeleteView, DetailView
from .models import Solicitante, Beneficiario, Operacion
from .forms import SolicitanteForm, BeneficiarioForm, OperacionForm, OperacionTotalModelForm

# Create your views here.
class Inicio(CreateView):
    model = Operacion
    form_class = OperacionTotalModelForm
    template_name = 'index.html'

    def get_queryset(self):
        return self.model.objects.filter(estado_procesada = False)

    def get_context_data(self, **kwargs):
        contexto = {}
        contexto['operaciones'] = self.get_queryset()
        contexto['compras'] = Operacion.objects.filter(tipo_operacion = 'COMPRA')
        contexto['ventas'] = Operacion.objects.filter(tipo_operacion = 'VENTA')
        contexto['form'] = self.form_class
        return contexto

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, self.get_context_data())

    def form_valid(self, form):
        solicitante = form['solicitante'].save()
        beneficiario = form['beneficiario'].save()
        operacion = form['operacion'].save(commit = False)
        operacion.id_solicitante = solicitante
        operacion.id_beneficiario = beneficiario
        operacion.save()
        return redirect('example:crear_operacion')

    def form_invalid(self, form):
        return redirect('example:crear_operacion')



# class OperacionCreateView(CreateView):
#     model = Operacion
#     form_class = OperacionTotalModelForm
#     template_name = 'index.html'
#
#     def get_queryset(self):
#         return self.model.objects.filter(estado_procesada = False)
#
#     def get_context_data(self, **kwargs):
#         contexto = {}
#         contexto['operaciones'] = self.get_queryset()
#         contexto['form'] = self.form_class
#         return contexto
#
#     def get(self, request, *args, **kwargs):
#         return render(request, self.template_name, self.get_context_data())
#
#     def form_valid(self, form):
#         solicitanteuno = form['solicitanteu'].save()
#         solicitantedos = form['solicitanted'].save()
#         operacion = form['operacion'].save(commit = False)
#         operacion.id_solicitanteu = solicigtanteuno
#         operacion.id_solicitanted = solicitantedos
#         operacion.save()
#         return redirect('example:crear_operacion')
#
#     def form_invalid(self, form):
#         return redirect('example:crear_operacion')
