import styled from "styled-components";

export const TimerStyled = styled.div`
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    border-radius: 2px;
    animation: blur .75s ease-out infinite;
    text-shadow: 
    0 1px 0 #ccc, 
    0 2px 0 #c9c9c9, 
    0 3px 0 #bbb, 
    0 4px 0 #b9b9b9, 
    0 5px 0 #aaa, 
    0 6px 1px rgba(0,0,0,.1), 
    0 0 5px rgba(0,0,0,.1), 
    0 1px 3px rgba(0,0,0,.3), 
    0 3px 5px rgba(0,0,0,.2), 
    0 5px 10px rgba(0,0,0,.25), 
    0 10px 10px rgba(0,0,0,.2), 
    0 20px 20px rgba(0,0,0,.15);

@keyframes blur {
    from {
      text-shadow:0px 0px 10px #fff,
        0px 0px 10px #fff, 
        0px 0px 25px #fff,
        0px 0px 25px #fff,
        0px 0px 25px #fff,
        0px 0px 25px #fff,
        0px 0px 25px #fff,
        0px 0px 25px #fff,
        0px 0px 50px #fff,
        0px 0px 50px #fff,
        0px 0px 50px #7B96B8,
        0px 0px 150px #7B96B8,
        0px 10px 100px #7B96B8,
        0px 10px 100px #7B96B8,
        0px 10px 100px #7B96B8,
        0px 10px 100px #7B96B8,
        0px -10px 100px #7B96B8,
        0px -10px 100px #7B96B8;
    }
  }

.title {
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: red;
  margin: 20px auto;
}

.indicator {
  background: #fff;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: red;
  box-shadow: 0 6px 8px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
  margin: 0 auto;
}

.main {
  padding-top: 40px;
  padding-bottom: 20px;
  border: none;
  background: #fff;
}
.btnContainer{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 0;
  position: relative;
  font-size: 24px;
}

.btn {
  cursor: pointer;
  justify-content: center;
  padding: 10px;
  text-align: center;
  white-space: nowrap;
  border: groove 1em red;
  border-radius: 2em;
  color: white;
  background-color: #d33094;
  margin: auto;

  &:hover {
    background-color: #f01414;
  }
}   

`;