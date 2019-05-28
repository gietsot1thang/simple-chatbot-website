
import React from 'react';
import Data from '../components/Data';

export function getDefaultSteps() {
  return[
    {
      id: 'welcome',
      message: 'Hola, soy Betto y estoy aquí para ayudarte a resolver tus dudas.',
      trigger: 'help',
    },
    {
      id: 'help',
      message: '¿En qué puedo ayudarte?',
      trigger: 'subject',
    },
    {
      id: 'agent-response-hello',
      message: ({ previousValue, steps }) => previousValue,
      trigger: 'subject',
    },
    {
      id: 'subject',
      user: true,
      trigger: 'agent',
    },
    {
      id: 'agent',
      component: <Data />,
      waitAction: true,
      replace: true,
    },
    {
      id: 'options-step-one',
      message: 'Selecciona la opción',
      trigger: 'options-step-two'
    },
    {
      id: 'options-step-two',
      component: <Data option />,
      waitAction: true,
      replace: true,
    },
    {
      id: 'agent-response',
      message: ({ previousValue, steps }) => previousValue,
      trigger: 'another-subject',
    },
    {
      id: 'confirm',
      message: '¿Deses realizar esta consulta?',
      trigger: 'confirm-options',
    },
    {
      id: 'confirm-options',
      options: [
        { value: 1, label: 'No', trigger: 'another-subject' },
        { value: 2, label: 'Sí', trigger: 'perfom-search' }
      ]
    },
    {
      id: 'another-subject',
      message: '¿Deseas realizar otra consulta?',
      trigger: 'another-subject-options'
    },
    {
      id: 'another-subject-options',
      options: [
        { value: 1, label: 'No', trigger: 'farewell' },
        { value: 2, label: 'Sí', trigger: 'subject' }
      ]
    },
    {
      id: 'empty-data',
      message: 'No pude encontrar información.',
      trigger: 'another-subject',
    },
    {
      id: 'empty-options',
      message: 'No hay opciones disponible.',
      trigger: 'confirm',
    },
    {
      id: 'perfom-search',
      component: <Data canSearch />,
      waitAction: true,
    },
    {
      id: 'farewell',
      message: 'OK. Espero haya podido ser de ayuda.',
      trigger: 'remind-farewell',
    },
    {
      id: 'remind-farewell',
      message: 'Recuerda que siempre estaré aquí para ayudarte a resolver tus dudas.',
      trigger: 'nice-farewell',
    },
    {
      id: 'nice-farewell',
      message: 'Fue un gusto saludarte 😀',
      trigger: 'final-farewell',
    },
    {
      id: 'final-farewell',
      message: '¡Hasta pronto! 💪👋',
      end: true,
    },
  ];
}

export function checkSteps(currentSteps, newStep) {
  let steps = [...currentSteps];
  steps = newStep ? [...steps, newStep] : steps;

  return [...new Set(steps)];
}
