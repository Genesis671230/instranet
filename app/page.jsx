"use client";
import { useEffect, useState } from "react";
import DepartmentList from "../components/departmentList/DepartmentList";
import SwiperGallery from "../components/swiper/SwiperGallery";
import AnnouncementAdd from "../components/ui/AnnouncementAdd";
import Announcements from "../components/ui/Announcements";
import Navbar from "../components/ui/Navbar";
import NewsCard from "../components/ui/NewsCard";
import Tasks from "../components/ui/Tasks";
import TeamTable from "../components/ui/TeamTable";
import { Calendar } from "../components/ui/calendar";
import LatestNews from "../components/ui/latestNews";
import { departments } from "../constants/index";
import { ENDPOINTS } from "../lib/utils";
import { useRouter } from "next/router";

export default function Home() {
  const [date, setDate] = useState(new Date());

const [isLoading, setIsLoading] = useState(false);
const [news, setNews] = useState([]);
const [events, setEvents] = useState([]);
const [announcements, setAnnouncements] = useState([]);


  const fetchAllNews = async () => {
    try {
      setIsLoading(true);
      let response = await fetch(
        `https://api.ens.sch.ae:8443/${ENDPOINTS.GET_ALL_NEWS}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            APIKEY: process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );

      let result = await response.json();
      console.log(result,"this is resulrt")
      if (result.statusCode === 200) {
        let newsArray = result.data;
        newsArray = newsArray.map((item, index) => {
          item["id"] = index + 1;
          return item;
        });
        setNews(newsArray);
        // dispatch(_setNews(newsArray));
        setIsLoading(false);
      } else if (result.statusCode !== 200) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  const fetchAllEvents = async () => {
    try {
      setIsLoading(true);
      let response = await fetch(
        `https://api.ens.sch.ae:8443/${ENDPOINTS.GET_ALL_EVENTS}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            APIKEY: process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );

      let result = await response.json();
      console.log(result,"this is resulrt")
      if (result.statusCode === 200) {
        let newsArray = result.data;
        newsArray = newsArray.map((item, index) => {
          item["id"] = index + 1;
          return item;
        });
        setEvents(newsArray);
        // dispatch(_setNews(newsArray));
        setIsLoading(false);
      } else if (result.statusCode !== 200) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }

  const fetchAnnouncements = async() => { 
    try {
      const res = await fetch("http://localhost:3001/announcements")
      const data = await res.json()

        console.log(data,"All Announcements");
      setAnnouncements(data)
    } catch (error) {
        console.log(error);
    }
   }

  useEffect(()=>{
    fetchAnnouncements()
    fetchAllNews()
    fetchAllEvents()
  },[])

  // const router = useRouter()
  useEffect(() => {
    const loginRedirect = () => {
     const token = JSON.parse(localStorage.getItem("userToken"));
     if(!token) {
     return window.location.pathname = "/login"
     }
     return 

   };
   loginRedirect()
 }, []);

  return (
    <main>
      <div>
        <Navbar user={{ name: "hamama", image: "https://source.unsplash.com/random/?ceo" }} tabs={departments} />


        <main className="flex flex-col">
          <section className="w-full  flex  justify-start text-white text-4xl min-h-[30rem] overflow-hidden">
            <div className=" flex relative m-4  h-[30rem] w-[50rem]">
              <SwiperGallery />
              <p className="text-black absolute top-0 bg-slate-50 px-4 py-2 text-[16px] left-10 z-10">
                Latest news
              </p>
            </div>
            <div className="h-full my-4">
              <div className="relative h-full flex">
           
              <p className="text-black absolute top-0 bg-slate-50 px-4 py-2 text-[16px] left-10 z-10">
                 Announcements
                </p>
                <img
                  src="https://source.unsplash.com/random/?meeting"
                  alt=""
                  className="shadow-lg cursor-pointer h-[20rem] w-full object-cover "
                />
                
              </div>
              <div className="relative h-full flex gap-4 justify-between">
              
                <img
                  src="https://source.unsplash.com/random/?documents"
                  alt=""
                  className="shadow-lg cursor-pointer  h-[10rem] w-[16rem] object-cover "
                />
                <img
                  src="https://source.unsplash.com/random/?services"
                  alt=""
                  className="shadow-lg cursor-pointer  h-[10rem] w-[16rem] object-cover "
                />
                <img
                  src="https://source.unsplash.com/random/?consultancy"
                  alt=""
                  className="shadow-lg cursor-pointer  h-[10rem] w-[16rem] object-cover "
                />
                <img
                  src="https://source.unsplash.com/random/?registers"
                  alt=""
                  className="shadow-lg cursor-pointer  h-[10rem] w-[16rem] object-cover "
                />
              </div>
            </div>
          </section>
          <hr />

          <section className="md:grid pl-8 grid-cols-5 grid-flow-row  mt-6">
            <div className="col-span-4 pt-0  p-4">
              <div className="flex justify-center md:justify-start">
                <DepartmentList />
              </div>
              <div className="sm:flex gap-4">
              <TeamTable title="HR Team"/>
              <TeamTable title="IT Team"/>
              <TeamTable title="Finance Team"/>
              </div>
              <div className="mt-10 relative  ">
                <div className="absolute top-10 right-4">
                  {/* <img src={BiSolidMessageSquareAdd} alt="" /> */}
                  <AnnouncementAdd/>
                </div>
                <a onClick={fetchAnnouncements} className="pl-2 text-4xl pt-4 font-bold ">
                  Announcements
                </a>
                {announcements.length!==0?
                <div className="p-2  flex-wrap grid sm:grid-cols-2 md:grid-cols-3 flex-col md:flex-row gap-2 ">
                  {announcements&&announcements.map((ann)=>(
                    <Announcements
                    title={ann.title}
                    subTitle="Latest Announcement"
                    description={ann.content}
                    />
                    ))}
                </div>
                :null}
              </div>
            </div>
            <div className="relative    ">
              <aside className="sticky mr-10  top-0 right-0">
                {/* <div className=" p-4 bg-slate-50">
                  <h1 className="text-lg font-bold pl-4 pb-4">News</h1>
                  <div className="flex flex-wrap justify-around">
                    <div><img src="https://source.unsplash.com/random/?hr" alt="" className="shadow-lg cursor-pointer w-32 h-40 object-cover rounded-md" />HR News</div>
                    <div><img src="https://source.unsplash.com/random/?finance" alt="" className="shadow-lg cursor-pointer w-32 h-40 object-cover rounded-md" />Finance News</div>
                    <div><img src="https://source.unsplash.com/random/?IT" alt="" className="shadow-lg cursor-pointer w-32 h-40 object-cover rounded-md" />IT News</div>
                    <div><img src="https://source.unsplash.com/random/?curriculum" alt="" className="shadow-lg cursor-pointer w-32 h-40 object-cover rounded-md" />Curriculum News</div>
                  </div>
                </div> */}
                {/* <Services /> */}

                <div className="mt-10 py-2 mb-4">
                  <h2 className="text-xl font-bold mb-2 ">Navigations</h2>
                  <div className="underline mt-2">Administration & Finanace Sector</div>
                  <div className="underline mt-2">School Operation Sector</div>
                  <div className="underline mt-2">Academic affairs and administration Sector</div>
                </div>
                <div className="w-fit">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                <NewsCard image="https://source.unsplash.com/random/?car" title="cars" description="loremqjbasijfbsabfiasbifbai asibfiasbf baibf iasb ibfaisb jfiasbjif aijsbjfasbjifbsaih biab iabsijf ai" stats={[{ title: "car", value: "22" }]} />
                <div className="mt-4">
                  <Tasks />
                </div>
              </aside>
            </div>
          </section>

          <div>
            {/* <EnsServices /> */}
            <div className="flex"></div>
            <LatestNews news={news} events={events}/>
          </div>
        </main>
      </div>
    </main>
  );
}
