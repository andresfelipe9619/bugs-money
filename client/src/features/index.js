import {default as loadable} from 'react-loadable';
import {Loading} from './common';

export const LoadableHome = loadable({
  loader: () => import('./home/Home'),
  loading: Loading,
});

export const LoadableDashboard = loadable({
  loader: () => import('./dashboard/Dashboard'),
  loading: Loading,
});

export const LoadableLogin = loadable({
  loader: () => import('./auth/Login'),
  loading: Loading,
});

export const LoadableRegister = loadable({
  loader: () => import('./auth/Register'),
  loading: Loading,
});

export const LoadableReports = loadable({
  loader: () => import('./reports/Reports'),
  loading: Loading,
});
