declare global {
  interface Window {
    env: { [key: string]: string };
  }
}

export type Env = {
  backendUrl: string;
};

function fetchEnv(name: string, defaultValue = "") {
  return (
    process.env[`REACT_APP_${name}`] ?? (window["env"] ? window["env"][name] : null) ?? defaultValue
  );
}

const env: Env = {
  backendUrl: fetchEnv("BASE_API_URL")
};

export default env;
