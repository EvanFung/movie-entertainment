import TabNavBar from "@/app/components/TabNavBar";
import SideBarMenu from "@/app/components/SideBarMenu";
import HeroSection from "@/app/components/HeroSection";
import CollectionVideos from "@/app/components/CollectionVideos";
export default function Home() {
    const limitNormal = 8;
    const limitTrending = 10;
    console.log("parent");
  return (
    <main className='flex flex-row justify-end'>
        <SideBarMenu/>
            <div className='right-container'>
                <HeroSection />
                <TabNavBar />
                <div className='video-collection-container'>
                    <CollectionVideos entertainmentType='movie' collectionType='Trending' isTrending={true}  endpoint='trending/all/day?language=en-USl' limit={10} />
                    <CollectionVideos entertainmentType={'movie'} collectionType={'Popular'}  endpoint='movie/popular?language=en-US&page=1' />
                </div>
            </div>
    </main>
  )
}
