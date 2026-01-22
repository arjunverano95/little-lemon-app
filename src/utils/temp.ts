/**
 * Creates a seeded random number generator function.
 * Uses a linear congruential generator algorithm for deterministic randomness.
 *
 * @param {number} seed - The seed value for the random number generator
 * @returns {() => number} A function that returns a random number between 0 and 1
 */
const seededRandom = (seed: number) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

/**
 * Fetches available reservation times for a given date.
 * Uses a seeded random generator based on the date to ensure consistent results.
 *
 * @param {Date} date - The date for which to fetch available times
 * @returns {Array<string>} An array of available time slots in "HH:MM" format (17:00-23:30)
 */
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

/**
 * Submits booking form data to the API.
 * In development mode, logs the form data to the console.
 * Always returns true (simulated API call).
 *
 * @param {Object} formData - The booking form data
 * @param {string} formData.date - The selected reservation date
 * @param {string} formData.time - The selected reservation time
 * @param {number} formData.guests - The number of guests
 * @param {string} formData.occasion - The occasion type (birthday, engagement, anniversary)
 * @returns {boolean} Always returns true (simulated successful submission)
 */
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

/**
 * State interface for available reservation times.
 */
interface TimesState {
  times: string[];
}

/**
 * Action interface for updating available times.
 */
interface UpdateTimesAction {
  type: string;
  date: Date;
}

/**
 * Reducer function to update available reservation times based on the selected date.
 * Handles the UPDATE_TIMES action to fetch new times for a given date.
 *
 * @param {TimesState} state - The current state containing available times
 * @param {UpdateTimesAction} action - The action object with type and date
 * @returns {TimesState} The updated state with new available times
 */
export const updateTimes = (state: TimesState, action: UpdateTimesAction): TimesState => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, times: fetchAPI(action.date) };
    default:
      return state;
  };
};

/**
 * Initializes the available times state with today's available time slots.
 *
 * @returns {TimesState} Initial state object with times for today's date
 */
export const initializeTimes = () => {
  // create a Date object to represent today's date
  const today = new Date();
  return { times: fetchAPI(today) };
};