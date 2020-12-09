const url =
  "http://newsapi.org/v2/top-headlines?country=lv&apiKey=247c49c88142424bae13d5712ca30de7";
export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}