import post1 from '../notion-data/126ce18c-fd83-8023-9ad1-d0e1809b21c3.json'
import post2 from '../notion-data/127ce18c-fd83-805c-bebd-d6772e18bf02.json'
import post3 from '../notion-data/1d26a965-5e32-809d-ba9c-ccd60d2513e2.json'
import post4 from '../notion-data/1d26a965-5e32-80b6-9b93-feb7bbdd8561.json'

const posts = [
  {
    title: "Maximizing the Benefits of BFF Pattern in API Design",
    slug: "api-design-in-bff",
    content: post1,
    date: "2023-10-22",
    description: "Exploring the shift from domain-centric to data-centric API endpoints after introducing BFF. This article introduces BFF and DDD concepts, then proposes API endpoint design strategies in the context of the BFF pattern.",
    image: undefined , 
    score : 1 
  },
  {
    title: "Naver Search Bar UX: Analysis and Implementation Guide",
    slug: "naver-search-bar-ux",
    content: post2,
    date: "2023-10-23",
    description: "Explore the UX analysis of Naver's search bar and strategies for replicating its features. The post examines the UX triggers, selection of search results, and the refreshing of result lists. It also compares coding approaches for implementing search bar functionalities, aiming for a concise and effective execution.",
    image: undefined , 
    score : 2 
  },
  {
    title : "한글테스트입니다." , 
    slug: "hangul-test-post" , 
    content : post3 , 
    date : "2025-04-11", 
    description : "한글 테스트를 위한 목적" , 
    image : undefined , 
    score : 3 
  }, 
  {
    title : "여러토글을 확인합니다." , 
    slug: "toggle-test" , 
    content : post4 , 
    date : "2025-04-11", 
    description : "여러토글을 확인합니다." , 
    image : undefined , 
    score : 4
  }


] as Post[];

posts.sort((a,b) => a.score - b.score); //오름차순으로 정렬

export default posts;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  image?: string;
  score: number; 
};
