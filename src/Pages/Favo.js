import BestProduct from '../Components/BestProduct'
import Footer from '../Components/Footer'
import GlobalStyle from '../GlobalStyle'
import { Header, Container } from '../styles/basicStyles'
import { GoChevronLeft, GoSearch, GoHeartFill } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'

const favolists = [
    [1, "[당일배송] 빨간색 파프리카", "https://sitem.ssgcdn.com/42/58/26/item/1000545265842_i1_334.jpg", '5,000₩'],
    [2, "신선한 양고기 1kg 숙성 냉장 양제비추리 1kg", "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/1876246968/B.jpg?78000000", '50,000₩'],
    [3, "아메리칸 치즈 슬라이스 2.27kg", "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3186243628/B.jpg?323000000", '1₩'],
    [4, "소고기 안심", "https://contents.lotteon.com/itemimage/20230817110144/LO/21/67/35/49/78/bndl_img/LO2167354978_1.jpg/dims/optimize/dims/resizemc/400x400", '500,000₩']
]

function Favo() {
    const navigate = useNavigate()

    return (
    <>
    <GlobalStyle />
        <Header
        style={{
        justifyContent: 'space-between',
        padding: '2.6rem 35px 10px 30px',
        }}
        >
            <DetailButton onClick={() => navigate(-1)}>
                <GoChevronLeft
                style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '1.5rem',
                height: '1.5rem',
                }}
                />
            </DetailButton>
            <p style={{}}>좋아요 한 상품</p>
            <DetailButton>
                <GoSearch
                style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '1.3rem',
                height: '1.3rem',
                }}
                />
            </DetailButton>
        </Header>
        
        <div>
            {/* 백엔드 미연결 시 */}
            {favolists && favolists.map((item, index) => 
                <div 
                    key={index}>
                    <BestProduct 
                        name={item[1]} 
                        icon={item[2]} 
                        price={item[3]} 
                        id={item[0]} />
                </div>
            )}
        </div>

        <Footer>
            <GoHeartFill style={{ color: '#23AA49' }}></GoHeartFill>
        </Footer>
    </>
    )
}

export default Favo

const DetailButton = styled.button`
    background-color: transparent;
    border: none;
`