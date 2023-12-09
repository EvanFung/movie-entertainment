'use client'
import TabNavBar from "@/app/components/TabNavBar";
import SideBarMenu from "@/app/components/SideBarMenu";
import HeroSection from "@/app/components/HeroSection";
import CollectionVideos from "@/app/components/CollectionVideos";
export default function Home() {
  return (
    <main className='flex flex-row justify-end'>
        <SideBarMenu/>
            <div className='right-container'>
                <HeroSection />
                <TabNavBar />
                <div className='video-collection-container'>
                    <CollectionVideos entertainmentType='movie' collectionType='Trending' isTrending={true} movieTitle='Oppenheimer' />
                    <CollectionVideos entertainmentType={'movie'} collectionType={'Popular'} movieTitle={'The nice guy'} />
                </div>
            </div>
    </main>
  )
}
