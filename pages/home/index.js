$(document).ready(myHome)

/**
 * IMPORTANTE!
 * URL para obter todos os artigos ordenados pela data e com status ativo:
 * http://localhost:3000/articles?_sort=date&_order=desc&status=on
 * \---------+---------/
 *           |
 *           +--> URL da API → variável 'app.apiBaseURL' em '/index.js'
 **/

/**
 * Função principal da página "home".
 **/
function myHome() {

    changeTitle()

    // var articleList = '';

    // $.get(app.apiBaseURL + 'articles', {
    //     _sort: 'date',
    //     _order: 'desc',
    //     status: 'on'
    // })
    //     .done((data) => {
    //         data.forEach((art) => {
    //             articleList += `
    //                 <div class="article art-item" data-id="${art.id}">
    //                     <img src="${art.thumbnail}" alt="${art.title}">
    //                     <div>
    //                         <h4>${art.title}</h4>
    //                         <p>${art.resume}</p>
    //                     </div>
    //                 </div>                    
    //             `
    //         })
    //         $('#artList').html(articleList)

    //         getMostViewed()
    //         getLastComments()
    //     })
    //     .fail((error) => {
    //         $('#artList').html('<p class="center">Oooops! Não encontramos nenhum artigo...</p>')
    //     })

}
