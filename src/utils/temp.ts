const seededRandom = (seed: number) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = (date: Date): Array<string> => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    };
    if (random() < 0.5) {
      result.push(i + ":30");
    };
  };
  return result;
};

export const submitAPI = (formData: { date: string, time: string, guests: number, occasion: string }): boolean => {
  // Form data is logged for debugging purposes
  // Check if we're in a development environment (works in both Vite and Jest)
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const viteEnv = (globalThis as any).import?.meta?.env;
    if (viteEnv?.DEV) {
      console.log(formData);
    }
  } catch {
    // In Jest/test environment, import.meta is not available
    // Silently skip logging
  }
  return true;
};

interface TimesState {
  times: string[];
}

interface UpdateTimesAction {
  type: string;
  date: Date;
}

export const updateTimes = (state: TimesState, action: UpdateTimesAction): TimesState => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, times: fetchAPI(action.date) };
    default:
      return state;
  };
};

export const initializeTimes = () => {
  // create a Date object to represent today's date
  const today = new Date();
  return { times: fetchAPI(today) };
};