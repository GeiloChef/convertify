export const checkBreakpoint = () => {
  let currentBreakpoint = 'xs'
  
  if (window.matchMedia('(min-width: 1536px)').matches) {
    currentBreakpoint = '2xl';
  } else if (window.matchMedia('(min-width: 1280px)').matches) {
    currentBreakpoint = 'xl';
  } else if (window.matchMedia('(min-width: 1024px)').matches) {
    currentBreakpoint = 'lg';
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    currentBreakpoint = 'md';
  } else if (window.matchMedia('(min-width: 640px)').matches) {
    currentBreakpoint = 'sm';
  } else {
    currentBreakpoint = 'xs';
  }

  return currentBreakpoint;
};