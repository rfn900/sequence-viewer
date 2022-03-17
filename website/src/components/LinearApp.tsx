import React from 'react';
import { LinearController } from '@anocca/sequence-viewer-react-linear';
import { Annotation, humanCodons } from '@anocca/sequence-viewer-utils';
import { useMockBackend } from '../mocks/mockBackend';
import { SequenceViewerApp } from '@anocca/sequence-viewer-app';
import { AnnotationForm } from '@anocca/sequence-viewer-react-mui-formik-form';

export const LinearApp = ({
  annotations = [],
  sequence,
  isProtein
}: {
  annotations?: Annotation[];
  sequence: string;
  isProtein: boolean;
}) => {
  const backend = useMockBackend(annotations);
  return (
    <SequenceViewerApp
      {...backend}
      sequence={sequence}
      isProtein={isProtein}
      renderLinearByDefault
      AnnotationForm={AnnotationForm}
      width={800}
      height={640}
    />
  );
};
