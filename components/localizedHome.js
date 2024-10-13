import Home from "@/components/home";
import { useEffect } from "react";

export default function LocalizedHome({ path }) {

  useEffect(() => {

    let language = "en";
    const langs = ["en", "es", "fr", "de", "ru"];
    if(typeof window !== "undefined") {

      try {
        var userLang = navigator.language || navigator.userLanguage;
        // convert to 2 letter code
        userLang = userLang.split("-")[0];
        if(langs.includes(userLang)){
          language = userLang;
        }

      } catch(e) {
        console.error(e);
      }

      try{
        let lang = window.localStorage.getItem("lang");
        if(lang && langs.includes(lang)) {
          language = lang;
        }
      } catch(e) {
        console.error(e);
      }

      if(path === "auto") {
        if(language !== "en") {
          console.log("Redirecting to", language);
          window.location.href = `/${language}`;
        }
      } else {
        if(path !== language) {
          window.location.href = `/${language}`;
        }
      }
    }




  }, []);
  return (
    <Home />
  )
}


