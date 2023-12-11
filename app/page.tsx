import TabNavBar from "@/app/components/TabNavBar";
import SideBarMenu from "@/app/components/SideBarMenu";
import HeroSection from "@/app/components/HeroSection";
import CollectionVideos from "@/app/components/CollectionVideos";
export default function Home() {
    const limitTrending = 10;
  return (
    <main className='flex flex-row justify-end main-container'>
        <SideBarMenu/>
            <div className='right-container'>
                <HeroSection />
                <TabNavBar />
                <div className='video-collection-container'>
                    <CollectionVideos entertainmentType='movie' collectionType='Trending' isTrending={true}  endpoint='trending/all/day?language=en-USl' limit={limitTrending} queryKey='trending' />
                    <CollectionVideos entertainmentType={'movie'} collectionType={'Popular'} isTrending={false}  endpoint='movie/popular?language=en-US&page=1' queryKey='popular' />
                    <CollectionVideos entertainmentType={'movie'} collectionType={'Now Playing'} isTrending={false}  endpoint='movie/now_playing?language=en-US&page=1' queryKey='now_playing' />
                    <CollectionVideos entertainmentType={'movie'} collectionType={'Top Rate'} isTrending={false}  endpoint='movie/top_rated?language=en-US&page=1' queryKey='top_rated' />
                </div>
            </div>
    </main>
  )
}
