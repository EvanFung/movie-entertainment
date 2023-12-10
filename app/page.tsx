import TabNavBar from "@/app/components/TabNavBar";
import SideBarMenu from "@/app/components/SideBarMenu";
import HeroSection from "@/app/components/HeroSection";
import CollectionVideos from "@/app/components/CollectionVideos";
import Footer from "@/app/components/Footer";
export default function Home() {
    const limitTrending = 10;
  return (
    <main className='flex flex-row justify-end'>
        <SideBarMenu/>
            <div className='right-container'>
                <HeroSection />
                <TabNavBar />
                <div className='video-collection-container'>
                    <CollectionVideos entertainmentType='movie' collectionType='Trending' isTrending={true}  endpoint='trending/all/day?language=en-USl' limit={limitTrending} queryKey='trending' />
                    <CollectionVideos entertainmentType={'movie'} collectionType={'Popular'}  endpoint='movie/popular?language=en-US&page=1' queryKey='popular' />
                    <CollectionVideos entertainmentType={'movie'} collectionType={'Now Playing'}  endpoint='movie/now_playing?language=en-US&page=1' queryKey='now_playing' />
                    <CollectionVideos entertainmentType={'movie'} collectionType={'Top Rate'}  endpoint='movie/top_rated?language=en-US&page=1' queryKey='top_rated' />
                </div>
                <Footer />
            </div>
    </main>
  )
}
