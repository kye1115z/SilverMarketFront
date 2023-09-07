import React, { useState, useEffect } from "react";
import GlobalStyle from "../GlobalStyle";
import { styled } from "styled-components";
import { Container, Title, Center } from "../styles/basicStyles.js";
import { CiSearch } from "react-icons/ci"
import CategoryList from "../Components/CategoryList";
import BestProduct from "../Components/BestProduct";
import SimpleSlider from "../Components/SimpleSlider";
import Footer from "../Components/Footer";
import axios from "axios";


function Home() {
    const lists = [
        [1, "과일", "../img/fruit.svg"],
        [2, "채소", "../img/vegetable.svg"],
        [3, "유제품", "../img/diary.svg"],
        [4, "고기", "../img/meat.svg"]
    ]

    const best = [
        [1, "[당일배송] 빨간색 파프리카", "https://sitem.ssgcdn.com/42/58/26/item/1000545265842_i1_334.jpg", '5,000₩', '채소'],
        [2, "신선한 양고기 1kg 숙성 냉장 양제비추리 1kg", "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/1876246968/B.jpg?78000000", '50,000₩', '고기'],
        [3, "아메리칸 치즈 슬라이스 2.27kg", "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3186243628/B.jpg?323000000", '1₩', '유제품'],
        [4, "소고기 안심", "https://contents.lotteon.com/itemimage/20230817110144/LO/21/67/35/49/78/bndl_img/LO2167354978_1.jpg/dims/optimize/dims/resizemc/400x400", '500,000₩', '고기']
    ]

    const [product, setProduct] = useState();
    const CateList = lists.map((v) => (<CategoryList name={v[1]} icon={v[2]} cate={v[4]} price={v[3]} id={v[0]} />))

    //리스트 받아오기
    const getProduct = async() => {
        const local = "http://127.0.0.1:8000/api/products/"
        const aws = "http://ec2-54-180-79-79.ap-northeast-2.compute.amazonaws.com"
        try {
            const res = await axios.get(
                local,
            )
            setProduct(res.data)
            console.log(res.data)
        }
        catch(e) {
            console.log(e)
        }
    };


    useEffect(()=>{
        getProduct()
    }, [])

    return (
        <> 
        <GlobalStyle />
            <div style={{
                width: "100%", backgroundColor: "#F3F5F7",
                height: "236px", position: "relative",
                borderTopLeftRadius: "0",
                borderTopRightRadius: "0",
                borderBottomLeftRadius: "50px",
                borderBottomRightRadius: "50px",
            }}>
                <Container>
                    <InputBox>
                        <CiSearch 
                            size="20"
                            color="#23AA49"
                            style={{
                                marginLeft: "16px",
                            }}/>
                        <form style={{
                            width: "90%"}}>
                            <Search 
                                placeholder="상품 검색"
                            />
                        </form>
                    </InputBox>
                    <div style={{
                        width: "100%", height: "19%", display: "flex",
                        justifyContent: "center", alignItems: "center",
                        marginBottom: "3vw"}}>
                        <SimpleSlider />
                    </div>
                    <Center style={{flexDirection: "column", marginBottom: "3vw"}}>
                        <Center className="CategoryBox">
                            <Title>
                                <Ttitle>상품 목록😋</Ttitle>
                                <More>더 보기</More>
                            </Title>
                        </Center>
                        <Center 
                            className="Category" 
                            style={{justifyContent: "space-around"}}>
                            {CateList}
                        </Center>
                    </Center>
                    <Center style={{flexDirection: "column"}}>
                        <Center className="CategoryBox">
                            <Title>
                                <Ttitle>인기 상품🔥</Ttitle>
                                <More>더 보기</More>
                            </Title>
                        </Center>
                    </Center>
                </Container>
                        {/* 백엔드 연결 시 */}
                        {/* {product&&product.map((item, index) => 
                        <Box 
                            key={index}
                            className="BestList" 
                            style={{display: "flow"}}>
                            <BestProduct 
                                name={item.products_name} 
                                icon={`http://127.0.0.1:8000/api/products${item.photo}`} 
                                price={item.id} 
                                id={item.id} />
                        </Box>
                        )} */}

                        {/* 백엔드 미연결 시 */}
                        {best && best.map((item, index) => 
                            <div 
                                key={index}>
                                <BestProduct 
                                    name={item[1]} 
                                    icon={item[2]} 
                                    price={item[3]} 
                                    id={item[0]} />
                            </div>
                        )}
                <Footer />
            </div>
        </>
    );
}

export default Home;

const Search = styled.input`
    width: 90%;
    height: 50px;
    border: none;
    text-indent: 5px;
    font-size: 16px;
    color: #979899;
    outline: none;
    background-color: white;

`;

const InputBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 50px;
    border-radius: 67px;
    position: relative;
    margin-top: 30px;
    margin-bottom: 24px;
    background-color: white;
`;

const Ttitle = styled.p`
    font-size: 18px;
    font-weight: bolder;
    color: #06161C;

    @media (min-width: 768px) {
    font-size: 1.7em;
    }
`;

const More = styled.a`
    font-size: 15px;
    color: #23AA49;
    text-decoration: none;


    @media (min-width: 768px) {
    font-size: 1.3em;
    }
`;

const Box = styled.div`
    width: 100%;
    background-color: blue;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
