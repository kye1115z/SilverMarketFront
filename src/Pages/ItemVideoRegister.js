import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { Container, Header, HeaderText } from "../styles/basicStyles";
import { GoChevronLeft } from "react-icons/go";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ItemVideoRegister() {

  //체크박스
  const checkBoxList = ['상품 외관', '상품명', '가격', '개당 수량 또는 중량', '총 수량 또는 중량', '상품 설명']

  const [checkedList, setCheckedList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const checkedItemHandler = (value, isChecked) => {
    if(isChecked) {
      setCheckedList((prev) => [...prev, value]);

      return;
    }

    if(!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));

      return;
    }

    return;
  };

  const checkHandler = (e, value) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked)
  }

  const [allow, setAllow] = useState(false);
  const [color, setColor] = useState("#BCC6BF");

  useEffect(() => {
    if(checkedList.length == 6) {
      setAllow((prev) => !prev)
      setColor("linear-gradient(329.82deg, #23AA49 18.21%, #4BC06C 109.1%);")
      console.log("hi")
      console.log(allow)
      console.log(color)
    } else {
      setAllow(false)
      setColor("#BCC6BF")
    }
  }, [checkedList])

  console.log(checkedList.length)

  const BtnLabel = styled.label`
    width: 75vw;
    height: 65px;
    border: none;
    border-radius: 15px;
    font-size: 24px;
    color: white;
    background: ${color};
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`; 



  // 비디오 저장
  const [file, setFile] = useState({});

  const videoUpload = e => {
    const videoTpye = e.target.files[0].type.includes('video');

    setFile({
      url: URL.createObjectURL(e.target.files[0]),
      video: videoTpye,
    });
    console.log(videoTpye);
  };

  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault();

    try {   
      console.log("try!")

      const formData = new FormData(); 
      formData.append("title", "맛있는 고구마");
      formData.append("video_file", file.url);

      // const res = await axios.post(
      //     'http://ec2-54-180-79-79.ap-northeast-2.compute.amazonaws.com/api/videos/', formData,
      //     {
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //       }
      //     },
          
      // );
      // console.log(res);
  }
  catch (e) {
      console.error(e);
  }
  alert("동영상이 성공적으로 전송되었습니다!")
  navigate("/home")
  }

  return (
    <>
      <GlobalStyle />
      <Header>
        <GoChevronLeft
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "1.5rem",
            height: "1.5rem",
          }}
        />
        <HeaderText>상품 동영상으로 등록하기</HeaderText>
      </Header>
      <Container>
        <Box>
          <Container>
            <Text style={{
                fontSize: "22px", fontWeight: "bolder", color: "#23AA49"
            }}>영상을 선택해주세요!</Text>
            <Text style={{fontSize: "22px"}}>영상의 길이는 5분 내로 <br />제한됩니다.</Text>
            <Text style={{fontSize: "22px"}}>영상 속에 다음 정보가  <br />포함되었는지 확인해주세요.</Text>
          </Container>
          <Container style={{paddingTop: "5px"}}>
            {checkBoxList.map((item, idx) => (
              <Text>
                <Input 
                  type="checkbox"
                  id={item}
                  checked={checkedList.includes(item)}
                  onChange={(e)=>checkHandler(e, item)}
                />
                {item}
              </Text>
            ))}
          </Container>
        </Box>
        <div>
        <BtnLabel for="video_file">동영상 선택하기</BtnLabel>
        <VideoInput 
          id="video_file"
          type="file"
          accept="video/*"
          onChange={videoUpload}
        />
        </div>
        {file.video && <video src={file.url} controls width="300px" style={{marginBottom: "30px"}}/>}
        <Submit onClick={onSubmit}>
          동영상 보내기
        </Submit>
      </Container>
    </>
  );
}
export default ItemVideoRegister;

const Box = styled.div`
  width: 85vw;
  height: 70vh;
  background-image: url('../img/boxcheck.svg');
  background-size: contain;
  background-repeat: no-repeat;
`;

const Text = styled.p`
  font-size: 20px;
  width: 80%;
  margin-top: 20px;
  line-height: 120%;
`;

const Submit = styled.button`
  width: 75vw;
  height: 65px;
  border: none;
  border-radius: 15px;
  font-size: 24px;
  color: white;
  background: linear-gradient(329.82deg, #23AA49 18.21%, #4BC06C 109.1%);
  
`; 

const Input = styled.input`
  margin-right: 10px;
  width: 17px;
  height: 17px;
`;

const VideoInput = styled.input`
  width: 0;
  height: 0;
`;
