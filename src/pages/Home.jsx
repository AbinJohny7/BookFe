import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
Header;

const Home = () => {
  return (
    <>
      <Header />
      <nav className="p-3 w-full bg-gray-900 text-white flex justify-center items-center">
        <div className="flex justify-between items-center px-3">
          <ul className="flex justify-center">
            <a href="/">
              <li className="mx-4 mt-3 ">Home</li>
            </a>
            <a href="/books">
              <li className="mx-4 mt-3 ">Books</li>
            </a>
            <a href="/carrers">
              <li className="mx-4 mt-3 ">Carrers</li>
            </a>
            <a href="/contact">
              <li className="mx-4 mt-3 ">Contact</li>
            </a>
          </ul>
        </div>
      </nav>
      <header className="flex justify-center items-center">
        <div id="main" className="flex justify-center items-center w-full">
          <div className="text-white flex justify-center items-center flex-col px-5">
            <h1 className="text-5xl">Wonderful Gifts</h1>
            <p>Give your family and friends a book</p>

            <div className="flex mt-10 w-full">
              <div className="flex items-center bg-white rounded-3xl px-4 w-full">
                <input
                  className="py-2 bg-white placeholder-gray-400 text-black w-full outline-none"
                  type="text"
                  placeholder="Search Books"
                />
                <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="flex justify-center items-center flex-col p-10 ">
        <h2>NEW ARRIVALS</h2>
        <h4 className="text-2xl">Explore Our Latest Collection</h4>
        <div className="grid grid-cols-4 w-full mt-5">
        <div className="p-3">
          <div className="p-3 shadow-md ">
            <img  src="" alt=""  style={{width:"100%",height:"300px"}}/>
            <div className="flex justify-center flex-col items-center mt-3">
            <p className="text-blue-700">sdvsdvs...</p>
            <h3>sdvsdv...</h3>
            <p>$ 222</p>
          </div>
          </div>
        </div>
        </div>
      <div className="flex justify-center items-center my-5">
      <button className="px-3 py-2 bg-blue-900 text-white hover:bg-white ">Explore More</button>
      </div>

      </section>
      <div className="grid grid-cols-2 w-full">
      <div className="flex justify-center items-center flex-col"><h4>FEATURED AUTHORS</h4><h3 class="text-2xl">Captivates with every word</h3>
      <p className="mt-6 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem nulla iste? Modi, molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum possimus accusantium necessitatibus id neque soluta quibusdam explicabo laborum? Deserunt vel quia voluptates dicta incidunt illo fuga pariatur sequi error.</p>
      <p class="mt-5 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem nulla iste? Modi, molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum possimus accusantium necessitatibus id neque soluta quibusdam explicabo laborum? Deserunt vel quia voluptates dicta incidunt illo fuga pariatur sequi error.</p>
      </div>
      <div className="px-10 pt-8">
        <img className="w-120" src="	https://thumbs.dreamstime.com/b/portrait-male-afri…nance-attorney-lawyer-sales-stylish-155546880.jpg" alt="" />
      </div>
      
      </div>
      <div className="flex justify-center items-center flex-col py-10 px-40 p-6">
      <h3>TESTIMONIALS</h3>
      <h3 class="text-2xl">See What Others Are Saying</h3>
      <img className="h-45 w-45 rounded-full" src="	https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
      <h6 class="mt-3">Treesa Joseph</h6>
      <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore perspiciatis porro eveniet. Optio necessitatibus provident autem, quam qui, dicta molestiae quis quia deleniti aliquam magnam temporibus mollitia ex repellendus! Dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, deserunt optio eum dolorum iure consectetur quia facilis porro modi placeat ea quis explicabo maxime voluptatum unde animi nemo aperiam quos!</p>
      </div>
      

      <Footer />
    </>
  );
};

export default Home;
