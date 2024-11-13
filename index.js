async function main() {
  const response = await fetch("https://architextures.org/app/query", {
    headers: {
      accept: "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "cache-control": "max-age=0",
      "content-type": "application/json",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      cookie:
        'country_code=IN; __stripe_mid=2a6a16d5-197d-49ae-b4d2-f7a8c48406b867e2bf; PHPSESSID=3f6f3cfd634710006771f2ac08b617be; artx={"referrer":"www.google.com/","categoryState":{"user-uploads":true,"stone":false,"brick":false,"wood":false,"terrazzo":false,"concrete":true,"metal":true,"tile":true,"fabric":true,"wallpaper":true,"carpet":true,"plastic":true,"surfacing":true,"insulation":true,"organic":true,"acoustic":true},"3dSetting":"plane","saveMenuState":"download"}',
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      table: "protextures",
      where: [
        ["status", "IN", "live"],
        ["category", "IN", "Stone,Brick,Wood,Terrazzo,Concrete,Metal,Tile,Fabric,Wallpaper,Carpet,Surfaces,plastic,Finishes,Landscaping,Insulation,Organic,Acoustic"],
      ],
      page: 2,
      joins: [
        {
          table: "brands",
          columns: ["name", "website_link", "logo"],
          on: ["brand", "=", "id"],
        },
        {
          table: "protextures_position_as",
          columns: ["position"],
          on: ["id", "=", "material"],
          sort: ["position", "asc"],
        },
      ],
      limit: 5000,
      requestPage: "https://architextures.org/create",
    }),
    method: "POST",
  });

  const data = await response.json();
  console.log(data.results.length);

  return data.results;
}

module.exports = main;
