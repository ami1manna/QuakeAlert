// import { useEffect, useState } from "react";
import "../styles/response.css";
// const ResponsePage = () => {
//   const [email, setEmail] = useState("");
//   useEffect(() => {
//     const email = localStorage.getItem("userEmail");
//     if (email) setEmail(email);
//   });
//   return <>{email ? <>Welcome : {email}</> : <> Pls Make Sure You Are Logged in</>}</>;
// };

function ResponsePage() {
  return (
    <div>
      <nav className="navh">
        <div className="headers">
          <div>
            <span className="welcomeh">We welcome all our Users...</span>
            <div className="cardm">
              <div className="card">
                <svg
                  className="weather"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="100px"
                  height="100px"
                  viewBox="0 0 100 100"
                  xmlSpace="preserve"
                >
                  {" "}
                  <image
                    id="image0"
                    width={100}
                    height={100}
                    x={0}
                    y={0}
                    href="data:image/png;base64,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"
                  />
                </svg>
                <div className="main">23 °C</div>
                <div className="mainsub">Dunmore, Ireland</div>
              </div>
              <div className="card2">
                <div className="upper">
                  <div className="humidity">
                    <div className="humiditytext">
                      Humidity
                      <br />
                      30%
                    </div>
                    <svg
                      xmlSpace="preserve"
                      viewBox="0 0 30 30"
                      height="30px"
                      width="30px"
                      y="0px"
                      x="0px"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      version="1.1"
                      className="humiditysvg"
                    >
                      {" "}
                      <image
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                      AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABiVBMVEUAAAAAAP9NerV/f39O
                      e7ZQfLZVf6pRfbfL5fdRfbZIbbZmmcxols5nl85OebSPsteLrdVSfLZxl89ok9FqlM5ahsBdicNa
                      hsFcicRhjcdWgbpahsFfi8ZbhsFijsmErOWLt+9xndZcicJahsFahsFdicN5n81xjcZqlNRpls1q
                      lNBfn99pls9nkcxXgrpZgrtik81OebWNsdeMrtZOebRNerVZg7pwmMhNebRKdLRNerZNebHZ8v9o
                      lM9jj8rV7v3W7v1ch7+Ktu6Lt/CEsep7p+Cz1PO+3fqJte5/q+V+quOUvvLY8f+TvfKpzvapzfaq
                      z/aRvPGdxfSVv/LX8P/W8P+32fnK5vyMuPCmzPXW8P6ny/WWv/KOufGawvO22PjJ5vzB4PrU7v6i
                      yPSz1fiYwfKOufDD4funzPXF4vvE4vuOuvHV7/7U7/7G4/uNufCx1Pew0/ev0veu0feQu/G01viP
                      ufF/q+SCrud+quSItO2kyvWjyfVijslrltFmkcyEqtZgjMf///8NXQssAAAAPHRSTlMAAZgCW+EG
                      y+jMBxRaRXHC2H8bX0ry/vrhyvnw0PDHR0Be/e/4/f4SDDNiEFVb0eI5iMHCho7NwI0YOBdy59Cm
                      AAAAAWJLR0SCi7P/RAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cCEBITAJMBs+kAAAFb
                      SURBVCjPY2CAAUYmZgY8gIWVBY8sGzsHJxc2CW4eXiDJx28jIAjiCgnzgoV5ebiBpIiomK2duISk
                      lL2Ng6O0jIwsmCsnIW5nKyYqwiDv5AwELq5uNjY27h6enh5grpcLiHKSZ1BwBgNvH6C0j68zKlCA
                      SfvZgIA/LukAsHQAVDgwCE06OAQoGxoMlQ4Lj0CVdo6MsomKhrJjfGwi0aSdY+NiYcx4G5sEdGkk
                      kGhjk4RHOjnEJgWPtLNvKprL07CpgktHpEfgk/a3ycAnnWmThRDMxpDOscmFi6Xl5aNLF+QUwqWL
                      bIoxogQBSpJskkpwS5cC4yYFp3RZElA6qQwh7VFeAWZXVFYByWpwxNcAueUeQGlFJWUZCZXauloV
                      CRllVdt6NbB0QyOIq6TIoK4BSrWaWpogSltHVw8srW8A4mqoY6R6QyOgrLEJztxiamZuZsGGOztZ
                      WlnD2QBCYbJl9Cx9XAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xNlQxODoxOTowMCswMDow
                      MG/wqfUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMTZUMTg6MTk6MDArMDA6MDAerRFJAAAA
                      KHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAyLTE2VDE4OjE5OjAwKzAwOjAwSbgwlgAAAABJRU5ErkJggg=="
                        y={0}
                        x={0}
                        height={30}
                        width={30}
                        id="image0"
                      />
                    </svg>
                  </div>
                  <div className="air">
                    <div className="airtext">
                      Wind
                      <br />8 Km/h
                    </div>
                    <svg
                      className="airsvg"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="30px"
                      height="30px"
                      viewBox="0 0 30 30"
                      xmlSpace="preserve"
                    >
                      {" "}
                      <image
                        id="image0"
                        width={30}
                        height={30}
                        x={0}
                        y={0}
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABaFBMVEUAAAAA//8ilfIhlfMg
                        lvIglfMglvIeku8cjf8glvMhlfIflvMhlfIhlvIglvMhl/MglvIglfIglPEfmfIhlfIglvQfn/8g
                        lfIglvIhlfMglfIglvMhl/AhlfIcm/AAf/8qlOkglPYglvIZmf8zmf8hlfIglfIXi+cilPMhlvMg
                        lfQhlvMglvIhlfIgl/MglvMhlvMhlfMhlvIfl+8hlvMhlfMglvMglvI/f/8hlvMilvMelvAglfIg
                        lvMhlvIglPIglvIhlfIkkfUglfMglfMhlvMhlvMilvMjlfEglvMhlfIhlfMglfIflvEnnOshlvIf
                        lPEflfIek/QglvIglvMhlfIime4jlPAglvMglvEhlvMhl/MglfMglfMhlvIak/Edk/UhlvIglfMg
                        l/IglvIglfIilPIhlvMhlfMhk/Eqqv8glvIglfMcl/UhlfMhlvIhlvMhlfIglfIhlfIgl/QflPQh
                        lvP///+FIn/GAAAAdnRSTlMAAVKu1MmNIQmy91ig/Z5s0fo3KP5dCL27Lvm0NvwSAgwf+woFv7oL
                        Q0RGa9L1Vtndx4sgme3FZgTIFiI/hvZld3sch8Tv7kI683nV6DgN4GBQMsycjw8k6nWqRW3cUxMa
                        5dpnfLU87N8mBrxXG5jnibjLoi8YaHuXCQAAAAFiS0dEd0Zk+dcAAAAJcEhZcwAACxMAAAsTAQCa
                        nBgAAAAHdElNRQfnAhEIBBbLW8PtAAABJ0lEQVQoz62RZ1fCMBSG46atomBR1IJ7g+KotKKgxYl7
                        4Z6493x/v6T0QKMtn/p8ec/Nk5Pc5BLiHCWlZeUVlVU21sWBwgvWuho1bqG2Dh6vla0X4ctGQyP8
                        VrqpuUVPCQGXlQ+26tEGtBfpX0JHp73t6kYPs9Db159nYDAEj8RoNxjCQ+xxvuFIgZHRMcemQMi4
                        iP+I8kRU0TUHG9RJqpWYFVPTcahKsc/jkSAzfgNuVvvjk5gj84W7FhZZvYRl4o0apFawGmT0GsKm
                        an0DmzS31O3cQgo75t27SNLYQyRNc/8AhzkROzrOPjCEE1poMk7Pzi8Sl7gyxp5B/Fq4Aa//A7m9
                        y7V6/2Ac+/hEy8CzUb68ysDbezp/rZL5+Pz6NvWh/TgwzV+1HV523WQ81AAAACV0RVh0ZGF0ZTpj
                        cmVhdGUAMjAyMy0wMi0xN1QwODowNDoyMiswMDowML1dmzYAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
                        MjMtMDItMTdUMDg6MDQ6MjIrMDA6MDDMACOKAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
                        LTE3VDA4OjA0OjIyKzAwOjAwmxUCVQAAAABJRU5ErkJggg=="
                      />
                    </svg>
                  </div>
                </div>
                <div className="lower">
                  <div className="aqi">
                    <svg
                      className="aqisvg"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      xmlSpace="preserve"
                    >
                      {" "}
                      <image
                        id="image0"
                        width={20}
                        height={20}
                        x={0}
                        y={0}
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                      AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABBVBMVEUAAABL4f9O5v9P5f9Q
                      5f9R5/8AZsxB0vYAd9EAeNQAd9MeoOM1w/EYmuIZm+IXnOIAAP8AccYmrOgYmuAWneEA//8AdtQZ
                      m+JP5f8ZmeUAf89L3vwcoOQYmeIAddEAeNUrseocjeIAd9QAeNMxu+4kqucZmuEYm+IWmeI5xfIf
                      n99P3/9Q5v9Q5v9Q5v9G2Pk0wPA+zfZN4v5L3/w+zfUyve8iqOcrs+s9zPVM4f1N4v1E1vklrOki
                      p+cmrOhH2fpP5f5F1/kstewqs+tO4/4nruott+0or+pL3vxE1flK3vxA0fcjqecrtOxO5P4yvvAs
                      tOw6yPNA0Pc7yfQ4xfI3xPL////cI4U2AAAALnRSTlMAEXF3ZWsFeC3S26iVh7MsAQnAVCIBZ7Ft
                      ChBv6GonVZQJs4yLxtPNLY8IEHuINVg0ZAAAAAFiS0dEVgoN6YkAAAAJcEhZcwAACxMAAAsTAQCa
                      nBgAAAAHdElNRQfnAhIFCRn0J5yMAAAAq0lEQVQY02NgIAkwMjFDARMjXJBFDw5Y4IKsCEFWmBgb
                      u56+gaERsiAHJxe3nrGJqZm5haWeFQ8vHz9QUEAQqt3a1MbWTkhYRBRmprG9A5qZYuJ6jk62ziYu
                      QEEJSaiglDRIjaOpraubu4wsupM8PL2g2gXk5BX0vH18LYwgZiqCLOJQUlbR0/Nz9LcNCAwKVlVT
                      10DRbh1iGqqphc+b2ANEW0cXCnS0SQt0ALCcIug70CWhAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIz
                      LTAyLTE4VDA1OjA5OjI1KzAwOjAwRMIpTAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wMi0xOFQw
                      NTowOToyNSswMDowMDWfkfAAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDItMThUMDU6MDk6
                      MjUrMDA6MDBiirAvAAAAAElFTkSuQmCC"
                      />
                    </svg>
                    <div className="aqitext">
                      AQI
                      <br />
                      30
                    </div>
                  </div>
                  <div className="realfeel">
                    <svg
                      className="rfsvg"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      xmlSpace="preserve"
                    >
                      {" "}
                      <image
                        id="image0"
                        width={20}
                        height={20}
                        x={0}
                        y={0}
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                      AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABuVBMVEUAAAAAAAAECQkIDg4E
                      BAQAAAAAAAAFBQUHDAwIDg4MFBUNFRUKCgoPGhxGenw/b3FDdXcmRUYJDAwJDw9Pi40LFBQNFhYM
                      FhYPGhsMExUKEhIPGhoKEhQMExMOGhoMExMPGhoKFBQLExMNFxcKEhILFBQKExMKExQLEhILERMK
                      EREHDQ1SkJMuUlMABAQAAAASHh9FeXtAcXI8aWszWlwvU1M4Y2QjPT4NGBoAAAAAAAAAAAAAAAAA
                      AAAAAAAAAAAAAABYmZtWlplKgoVlsbRsvsF0zM9uwsVuwcNsvb9ecU53czF0bStgbkdqt7dntbhp
                      tbVxaCf5uxD+vxD7vBBTUilYlZdtwMNms7Zdc1P8vRDYpBR5b0imsKy0wcFzhoZdkpRldEx6cU3W
                      5eWLnJxdm51otrlZdl67kBWxvbmUo6RmfHxajo9ouLpqt7mJdiN8YxnH1dWVpaVfn6Jgl41OUUKv
                      u7pWe3xwxsldn6KmtLTO3NxUf4BswMN0ys1gpaedrKzT4uJjd3dsvcBqubxXg4Vgd3hthYVid3dh
                      dnZof39shYVkf4BVeXpqt7pksbJjr7Jdo6X////f0mPcAAAAQXRSTlMABGh/a1xUZIqPo7BH2vv4
                      /vJQgvyxwLLCpqXBsafBqcKutcCwuamtop+SgPzwOQzg/f728fD166Zla1o/PiEmFs+XjUIAAAAB
                      YktHRJKWBO8gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wISBQ8aO3RqsAAAAQlJREFU
                      GNNjYMAOGJmYmVlY2djYmZk5OLm4ecBivHyOTs7O/ALOTo6Oji6ugkJAQWERNxTgLgoUFEMVc/MQ
                      BwpKuLl5enn7+PpBBf0lwYIBgUHBwSGhYeFgwQgpoKC0W2RUcHB0TGxcfAJYuwxYMDE4OCgpGQhS
                      UoGCabJAQTm39KDgjEyQYHJWdo5brjxQUMEtLz+ooDAZAoqKXRXBgm4lpWXJMFBeoQQUVHZzq6yC
                      i1XX1KoABVXr3OobYGKNTc0takBBdVc3t9a29vaOzq7unt4+t34NoKDmBFRvTtQCCmrroArq6gEF
                      9Q0MnY2MTUxNzYxBwNwCHMj6llbWNrZ29jZg4IAjKhgAAWdbVO4nzP4AAAAldEVYdGRhdGU6Y3Jl
                      YXRlADIwMjMtMDItMThUMDU6MTU6MjYrMDA6MDCumAyfAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIz
                      LTAyLTE4VDA1OjE1OjI2KzAwOjAw38W0IwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0x
                      OFQwNToxNToyNiswMDowMIjQlfwAAAAASUVORK5CYII="
                      />
                    </svg>
                    <div className="realfeeltext">
                      Real Feel
                      <br />
                      21 °C
                    </div>
                  </div>
                  <div className="pressure">
                    <svg
                      className="pressuresvg"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      xmlSpace="preserve"
                    >
                      {" "}
                      <image
                        id="image0"
                        width={20}
                        height={20}
                        x={0}
                        y={0}
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                      AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABNVBMVEUAAAAAr8EArMAAqsAA
                      rMEBrMEBrMAAq8AArb8AqsIBrMEgtMa53+S53+QetMYArMEArMEAqrsArMA9scFegp4Cqr8Ao8gA
                      rMEErMHn6+wTobgArMAArMBCvc1sco8Aq8EArMFSqrmNWn1Dvs4Aq8EErcLo7O0SorgArMAAq8A8
                      sMBie5gCqr8BrMEftMa23eO33uQcs8YAq8AArMAAq8ABq8AAq8EAq8Mtdn9DW2OvvcSwvcSrucJ3
                      kZyvvcWvv8OruMJ6kZ55kJ2rusAArMHFzdLH0NS5xMru7u7l5+jm6Ojp3eDd4OK2ubvAhZL4G0en
                      rK1YYWV3foHu7e39Mlns7OwzXWQxW2Tl5+f6VHSssLKpra/9MVnc4OL1m6y5xcvv09kxcX5FWmR4
                      kJywvsWsusL///80ikJBAAAARHRSTlMAHUotv/j5vSw/9cvd3MrzPg/q4+rqDnXk+/NzucP3t873
                      /cJ05Przcunj8en0y93cyz28/vu7K1RASpWb/YBAhvP3hpKCbb4AAAABYktHRGYs1NklAAAACXBI
                      WXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wISBRAIBZcVZgAAAM1JREFUGNNjYMAHGJmYGNGEmFlc
                      WNlc2DmQxTi5uHlc3Xj5+AUQYoJCwu4enl4e3iKiYnBBcQlJHw8PD18/fylpuKCMLFAoIDAoOERO
                      Hi6ooOjuERoWHuERqaSAUKkMVBkV7REcg6RSRVUtFijsEeevroGwXVMrHiSYoK2DsJ1BQFdP38PD
                      wJDfCNn1HMYmpqYmZuZoHrVITLTACBDLpCRLJK6VNRDY2CYn29qAWFZgQbsUIEhNBoJUEMsOLGhv
                      BwQOjk5Ojs4glj0DCQAAJCUofMKIT9cAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDItMThUMDU6
                      MTY6MDgrMDA6MDBXtcu8AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTE4VDA1OjE2OjA4KzAw
                      OjAwJuhzAAAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xOFQwNToxNjowOCswMDowMHH9
                      Ut8AAAAASUVORK5CYII="
                      />
                    </svg>
                    <div className="pressuretext">
                      Pressure
                      <br />
                      1012 mbar
                    </div>
                  </div>
                  <div className="card3">Safe</div>
                </div>
              </div>
            </div>
          </div>
          <span className="welcomes">
            <img src="profile.svg" alt="" />
            <h1>Hello,User</h1>
            <div className="subwelcomes">
              <p>Email:***@gmail.com</p>
              <p>Phone Number:9853583581</p>
            </div>
          </span>
        </div>
      </nav>
      <div className="container">
        <div className="confirst">
          <span className="containerh">
            <h1>Emergency Preparedness</h1>
          </span>
          <div className="containers">
            Be ready for any emergency with our comprehensive resources and guidance.
          </div>
          <div className="btns">
            <button className="btn-1">Request Emergency Assistance</button>
            <button className="btn-2">View Evacuation Routes</button>
          </div>
        </div>
        <div className="consecond">
          <span className="containerh">
            <h1>Emergency Checklist</h1>
          </span>
          <span>
            <div className="containers">
              A handy checklist to help you stay prepared for any emergency.
            </div>
            <div className="condiv">
              <div className="checkbox-wrapper-19">
                <input type="checkbox" id="cbtest-19-1" />
                <label htmlFor="cbtest-19-1" className="check-box" />
              </div>
              <ul className="conul">
                <li>
                  <h3>Gather Essential Supplies</h3>
                </li>
                <li className="conli">
                  Assemble a kit with water, non-perishable food, flashlight, first aid kit, and
                  other necessary items.
                </li>
              </ul>
            </div>
            <div className="condiv">
              <div className="checkbox-wrapper-19">
                <input type="checkbox" id="cbtest-19-2" />
                <label htmlFor="cbtest-19-2" className="check-box" />
              </div>
              <ul className="conul">
                <li>
                  <h3>Secure Your Home</h3>
                </li>
                <li className="conli">
                  Secure heavy furniture, appliances, and other items to prevent them from falling
                  during an earthquake.
                </li>
              </ul>
            </div>
            <div className="condiv">
              <div className="checkbox-wrapper-19">
                <input type="checkbox" id="cbtest-19-3" />
                <label htmlFor="cbtest-19-3" className="check-box" />
              </div>
              <ul className="conul">
                <li>
                  <h3>Communicate with Loved Ones</h3>
                </li>
                <li className="conli">
                  Establish a plan to check in with family and friends during an emergency.
                </li>
              </ul>
            </div>
            <div className="condiv">
              <div className="checkbox-wrapper-19">
                <input type="checkbox" id="cbtest-19-4" />
                <label htmlFor="cbtest-19-4" className="check-box" />
              </div>
              <ul className="conul">
                <li>
                  <h3>Stay Informed</h3>
                </li>
                <li className="conli">
                  Monitor local news and emergency alerts for the latest updates and instructions.
                </li>
              </ul>
            </div>
            <div className="condiv">
              <div className="checkbox-wrapper-19">
                <input type="checkbox" id="cbtest-19-5" />
                <label htmlFor="cbtest-19-5" className="check-box" />
              </div>
              <ul className="conul">
                <li>
                  <h3>Identify Safe Zones</h3>
                </li>
                <li className="conli">
                  Locate the nearest emergency shelters and evacuation routes in your area.
                </li>
              </ul>
            </div>
          </span>
        </div>
        <div className="conthird">
          <span className="containerh">
            <h1>Emergency Services</h1>
          </span>
          <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="contacts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="cards bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Police</h2>
                  <span className="text-gray-500" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500">Phone:</span>
                  <span>100</span>
                </div>
                <button className="w-full call-button" data-phone={+15551234567}>
                  Call
                </button>
              </div>
              <div className="cards bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Fire Department</h2>
                  <span className="text-gray-500" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500">Phone:</span>
                  <span>911</span>
                </div>
                <button className="w-full call-button" data-phone={+15559876543}>
                  Call
                </button>
              </div>
              <div className="cards bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Ambulance</h2>
                  <span className="text-gray-500" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500">Phone:</span>
                  <span>121</span>
                </div>
                <button className="w-full call-button" data-phone={+15554567890}>
                  Call
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ResponsePage;
