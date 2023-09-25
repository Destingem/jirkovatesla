

export default async function handler(req, res) {
    let item = "kontaktni-udaje"
    let fetchedUdaje = await fetch("https://cms.tesla.ondrejzaplatilek.cz/api/"+ item + "?populate=*", {
      headers: {
        Authorization: "Bearer "+ process.env.NEXT_PUBLIC_STRAPI_JWT,
      }
    });
    let info = await fetchedUdaje.json();
    res.json(info ? info : []
    )
  }