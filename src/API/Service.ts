import axios from "axios";

export class Service {
    // static async getAll(limit = 10, page = 1) {
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    //         params: {
    //             _limit: limit,
    //             _page: page
    //         }
    //     })
    //     return response;
    // }

    // static async getAll(bySort: string, page: number, typeId?: number[] | undefined, limit: number = 3 ) {
    //   const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/card/model/mini`, {
    //       params: {
    //         typeId,
    //         bySort,
    //         page,
    //         limit,
    //       },
    //     }
    //   );
    //   return response;
    // }

    // static async sortGames(sort: string | null, platform: string | null, category: string | null, signal: any) {
    //     const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
    //         params: {
    //             'sort-by': sort,
    //             platform: platform,
    //             category: category

    //         },
    //         headers: {
    //             'X-RapidAPI-Key': '033286b7a7msh9f7c2e210245699p1643a3jsn3f9a50874c4e',
    //             'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    //         },
    //         signal
    //     });
        
    //     return response;
    // }

    // static async getGameInfo(id: number,  signal: any) {
    //     const response = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
    //         headers: {
    //             'X-RapidAPI-Key': '033286b7a7msh9f7c2e210245699p1643a3jsn3f9a50874c4e',
    //             'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    //         },
    //         signal,
    //     });
        
    //     return response;
    // }
  
}