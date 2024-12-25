import React, { useEffect,useState } from 'react'
import Newsitem from './Newsitem'
import Spin from './Spin'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'





const News=(props)=> {
    // article=[
    //     {
    //     "source": {
    //    "id": "cbs news",
    //    "name": "CBS News"
    //    },
    //    "author": "Aimee Picchi, Megan Cerullo",
    //    "title": "Hurricane Beryl snarls travel in U.S. as airlines cancel hundreds of flights   CBS News",
    //    "description": "Airlines are suspending or canceling flights into Houston as Hurricane Beryl makes landfall in Texas.",
    //    "url": "https://www.cbsnews.com/news/hurricane beryl houston texas travel flights airlines/",
    //    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/07/03/2a289943 ae33 4e5c 951e 106a9be1fff3/thumbnail/1200x630/ee7f479f6ef9fcbe6a7db725def1e196/gettyimages 1232937149.jpg?v=2287029998c5246c93d6dd038eb30603",
    //    "publishedAt": "2024 07 08T20:32:37Z",
    //    "content": "Hundreds of flights have been canceled Monday as airlines grapple with the impact of Hurricane Beryl making landfall in Texas. \r\nAnother roughly 3,500 flights were delayed, although not all delays ar… [+2894 chars]"
    //    },
    //     {
    //     "source": {
    //    "id": "the washington post",
    //    "name": "The Washington Post"
    //    },
    //    "author": "Christian Shepherd, Gerry Shih",
    //    "title": "With Viktor Orban in China pushing cease fire, Russian missiles slam Ukraine   The Washington Post",
    //    "description": "As Hungary’s leader pushed for a Ukraine cease fire, Russian missile strikes hit a children’s hospital in Kyiv and killed at least 21 across the country.",
    //    "url": "https://www.washingtonpost.com/world/2024/07/08/modi orban putin china russia india/",
    //    "urlToImage": "https://www.washingtonpost.com/wp apps/imrs.php?src=https://arc anglerfish washpost prod washpost.s3.amazonaws.com/public/Z2FNQW642DLW5GRWNUMJRD5SIA.jpg&w=1440",
    //    "publishedAt": "2024 07 08T20:31:17Z",
    //    "content": "Hungarian Prime Minister Viktor Orban made a surprise visit Monday to Beijing, where Chinese leader Xi Jinping called for a global effort to push Russia and Ukraine toward a cease fire and praised Or… [+7403 chars]"
    //    },
    //     {
    //     "source": {
    //    "id": "the washington post",
    //    "name": "The Washington Post"
    //    },
    //    "author": "Steven Goff",
    //    "title": "Kevin Paredes and Griffin Yow named to U.S. Olympic men's soccer team   The Washington Post",
    //    "description": "The Northern Virginia natives, both 21, are former D.C. United wingers who now compete in European leagues.",
    //    "url": "https://www.washingtonpost.com/sports/2024/07/08/us olympic mens soccer team/",
    //    "urlToImage": "https://www.washingtonpost.com/wp apps/imrs.php?src=https://arc anglerfish washpost prod washpost.s3.amazonaws.com/public/H7TFO46OENMHSRMSRQYPMGWELA_size normalized.jpg&w=1440",
    //    "publishedAt": "2024 07 08T19:30:40Z",
    //    "content": "Kevin Paredes and Griffin Yow, 21 year old soccer players from Northern Virginia who launched their careers as D.C. United homegrown players before venturing to Europe, are going to the Paris Olympic… [+3973 chars]"
    //    },
    //     {
    //     "source": {
    //    "id": "cnn",
    //    "name": "CNN"
    //    },
    //    "author": "Lauren Said Moorhouse",
    //    "title": "Ukrainian children’s hospital attacked as Russian strikes on cities kill at least 31   CNN",
    //    "description": "Russian missile strikes hit targets in cities across Ukraine on Monday, including a children’s hospital in Kyiv, killing at least 36 people, authorities say.",
    //    "url": "https://www.cnn.com/2024/07/08/europe/ukraine russian strike childrens hospital intl/index.html",
    //    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024 07 08t091218z 886743662 rc2xq8aye5gi rtrmadp 3 ukraine crisis attack kyiv.JPG?c=16x9&q=w_800,c_fill",
    //    "publishedAt": "2024 07 08T19:21:00Z",
    //    "content": "A Russian missile strike partially destroyed a childrens hospital in Kyiv on Monday, causing terrified patients and their families to flee for their lives, as officials fear more people could be trap… [+8370 chars]"
    //    },
    //     {
    //     "source": {
    //    "id": null,
    //    "name": "BBC News"
    //    },
    //    "author": null,
    //    "title": "Ecowas risks disintegration if Burkina Faso, Mali and Niger leave   Omar Touray   BBC.com",
    //    "description": "The military leaders of Mali, Niger and Burkina Faso say they are leaving Ecowas and forming a new alliance.",
    //    "url": "https://www.bbc.com/news/articles/ce782jzyl76o",
    //    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ff2a/live/43a9f720 3d13 11ef a12e fbb463384a1f.jpg",
    //    "publishedAt": "2024 07 08T17:44:25Z",
    //    "content": "By Chris Ewokor &amp; Basillioh Rukanga, BBC News, Abuja and Nairobi\r\nThe West African bloc Ecowas has warned that it risks disintegration and worsened insecurity after Burkina Faso, Mali and Niger f… [+4130 chars]"
    //    },
    //     {
    //     "source": {
    //    "id": "the washington post",
    //    "name": "The Washington Post"
    //    },
    //    "author": "Marc A. Thiessen",
    //    "title": "Opinion | How Trump can make NATO great again   The Washington Post",
    //    "description": "The alliance needs a MAGA makeover for the threats of the 21st century.",
    //    "url": "https://www.washingtonpost.com/opinions/2024/07/08/trump nato alliance defense spending/",
    //    "urlToImage": "https://www.washingtonpost.com/wp apps/imrs.php?src=https://arc anglerfish washpost prod washpost.s3.amazonaws.com/public/EUAHY6RMI5G37BRLOTDUKSGLHA.jpg&w=1440",
    //    "publishedAt": "2024 07 08T17:15:36Z",
    //    "content": "Return to menuTrump has expressed confidence that he can end the war in Ukraine, but he can go further by offering a credible plan to prevent it from ever starting up again.\r\nTrump has said that if P… [+3260 chars]"
    //    },
    //     {
    //     "source": {
    //    "id": null,
    //    "name": "CBS Sports"
    //    },
    //    "author": "",
    //    "title": "Vikings rookie cornerback Khyree Jackson dies in car accident at 24   CBS Sports",
    //    "description": "Oregon's Jackson was selected in the fourth round of the 2024 NFL Draft in April",
    //    "url": "https://www.cbssports.com/nfl/news/vikings rookie cornerback khyree jackson dies in car accident at 24/",
    //    "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/07/06/a5004849 27e0 4285 bdac 3e1973681d8b/thumbnail/1200x675/5304ad79ccead4f0651f77e91adc360c/jackson getty.jpg",
    //    "publishedAt": "2024 07 08T16:15:00Z",
    //    "content": "Minnesota Vikings rookie cornerback Khyree Jackson has died in a car accident, the team announced Saturday. He was 24 years old. Jackson was selected by Minnesota out of Oregon in the fourth round of… [+1804 chars]"
    //    },
    //     {
    //     "source": {
    //    "id": null,
    //    "name": "BBC News"
    //    },
    //    "author": null,
    //    "title": "Gaza war: Israel hits Gaza City as tanks re enter central areas   BBC.com",
    //    "description": "Residents say they are seeing some of the heaviest strikes since the war began nine months ago.",
    //    "url": "https://www.bbc.com/news/articles/c51yle4m5pzo",
    //    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8f06/live/ae162770 3d20 11ef 90ff 7b1636c56d0e.jpg",
    //    "publishedAt": "2024 07 08T15:56:15Z",
    //    "content": "By Sebastian Usher &amp; Rushdi Aboualouf, BBC News, Jerusalem &amp; Istanbul\r\nPalestinians in Gaza City say they have experienced one of the most intense Israeli bombardments since Israel launched i… [+4426 chars]"
    //    }]
  const [article,setarticle]=useState([])
  const [loading,setloading]=useState(false)
  const [page,setpage]=useState(1)
  const [total,settotal]=useState(0)
    

    const update=async()=>{
      props.setprogress(30)
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.cat}&apiKey=3dfdb9102b154deab66608dfeb6457b9&page=${page}&pageSize=5`
      let data= await fetch(url)
      let pars= await data.json()
      setarticle(pars.articles)
      settotal(pars.totalResults)
     
      
      props.setprogress(100)

    }
    useEffect(()=>{
      update()
    },[])
    
    
    
    // abc=async (props)=>{
      
    //     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.cat}&apiKey=3dfdb9102b154deab66608dfeb6457b9&page=${this.state.page + 1}&pageSize=5`
    //     this.setState({loading:true})
    //     let data= await fetch(url)
    //     let pars= await data.json()
    //     this.setState({article:pars.articles,page:this.state.page + 1})
    //     this.setState({loading:false})
    //     this.setState({total:this.state.total-5})
        
    //   }
      
    //   abb=async (props)=>{
    //     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.cat}&apiKey=3dfdb9102b154deab66608dfeb6457b9&page=${this.state.page - 1}&pageSize=5`
    //     this.setState({loading:true})
        
    //     let data= await fetch(url)
    //     let pars= await data.json()
    //     this.setState({article:pars.articles,page:this.state.page - 1})
    //     this.setState({loading:false})
    //     this.setState({total:this.state.total+5})

    // }

    const fetchMoreData=async ()=>{
      // this.setState({total:this.state.total-5})
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.cat}&apiKey=3dfdb9102b154deab66608dfeb6457b9&page=${page+1}&pageSize=5`
      setpage(page+1)
      setloading(true)
      let data= await fetch(url)
      let pars= await data.json()
      setarticle(article.concat(pars.articles))
      settotal(pars.totalResults)
      setloading(false)

    }
    
    const xx=(ele)=>{
      return  <div className="col-md-4">
                     
      <Newsitem a={ele.title} b={ele.description} c={ele.url} f={ele.urlToImage} e={ele.publishedAt} d={ele.author}/>
   
       </div>
    }
  
      return (
        <>
      
          <h1>Top headlines</h1>
          {/* {this.state.loading && <Spin/>} */}
          
          <InfiniteScroll
            dataLength={article.length}
            next={fetchMoreData}
            hasMore={article.length<=total}
            loader={<Spin/>}
          >
              <div className='container'>
          <div className="row">
          {article.map(xx)}
          
           </div>
           </div>
           </InfiniteScroll>
           
           
           </>
    )
  }

export default News


News.defaultProps={
  cat:"general"
}