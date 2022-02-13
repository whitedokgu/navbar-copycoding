const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      siderbarOpen = document.querySelector(".siderbarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");


      let getMode = localStorage.getItem("mode");   //로컬스토리지에서 "mode"를 가져온다
          if(getMode && getMode === "dark-mode"){   //만약 getMode라는 변수나 getMode라는 변수가 "dark-mode" 일 경우 body의 calsslist에 "dark" 를 추가한다 
            body.classList.add("dark");
          }
      

    // 다크모드 설정 스크립트

      modeToggle.addEventListener("click" , () =>{
          modeToggle.classList.toggle("active");
          body.classList.toggle("dark");

          // 창을 껏다 키거나 새로고침 하여도 처음 설정한 값 유지
          if(!body.classList.contains("dark")){             //만약 body의 classlist에 "dark"가 있다면
              localStorage.setItem("mode" , "light-mode");  //로컬스토리지에 데이터를 쓴다 mode에 "light-mode"로
          }else{
            localStorage.setItem("mode" , "dark-mode");
          }
      });

    // 메뉴슬라이더 열고닫기
    siderbarOpen.addEventListener("click" , () =>{
        nav.classList.add("active")
    })
    body.addEventListener("click" , e =>{       //e = event
        let clickElm = e.target;                //let = 지역변수(clickElm) elm = element(엘리먼트) 의 약자 

        if(!clickElm.classList.contains("siderbarOpen") && ! clickElm.classList.contains("menu")){      // && = or 함수
            nav.classList.remove("active")
        }
    });
