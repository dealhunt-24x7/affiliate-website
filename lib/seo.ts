export const generateMetaTags = (title: string, description: string) => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: typeof window !== "undefined" ? window.location.href : "",
    },
  };
};

export const generateJsonLd = (data: object) => {
  return JSON.stringify(data);
};
