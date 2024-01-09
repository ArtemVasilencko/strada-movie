interface Options {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
    "content-type"?: string;
  };
  body?: string | undefined;
}

export function optionsGET(token: string): Options {
  return {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}

export function optionsPOST(token: string, body?: object): Options {
  return {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  };
}

export const fetchData = async (
  url: string,
  token: string,
  method: string,
  body?: object
): Promise<any> => {
  if (!navigator.onLine) {
    return;
  }

  try {
    const response = await fetch(
      url,
      method === "GET" ? optionsGET(token) : optionsPOST(token, body)
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
