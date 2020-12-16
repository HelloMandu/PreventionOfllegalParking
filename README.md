<h1 align="center">Prevention Of IllegalParking</h1>

## Features
- React Project
  - 현재위치이동
  - 주소검색
  - 불법주정차공간 판단
  - 주변 cctv, 학교, 주차장 위치 확인
 
## API
 - 카카오지도: https://apis.map.kakao.com/
 - 주소검색: https://www.juso.go.kr/openIndexPage.do
 
## Tech
 - ES6
 - React-Hooks
 - React-Redux
 - Redux-Saga
 - SCSS
 - axios
 - React-Router
 - Swiper
 - Express.js
 
## Screen Shots
<p align="center">
  <img src="https://user-images.githubusercontent.com/45222982/102353469-70aab700-3fec-11eb-97e1-af26eae25aba.png" width="350" height="500"/> 
  <img src="https://user-images.githubusercontent.com/45222982/102353460-6d173000-3fec-11eb-9a20-4b71a8ec5561.png" width="350" height="500"/>
  </p>
  <p align="center">
  <img src="https://user-images.githubusercontent.com/45222982/102353463-6e485d00-3fec-11eb-98da-ca8955a11c05.png" width="350" height="500"/>
  <img src="https://user-images.githubusercontent.com/45222982/102353465-6ee0f380-3fec-11eb-9f6a-be0abfffcfb0.png" width="350" height="500"/>
</p>

## Explain
 - kakaomap을 이용하여 부산광역시 내의 cctv, 학교, 주차장 위치를 마커로 표시하였습니다.
 - Express.js를 이용해 api 서버를 만들어 주변 2KM이내 정보만 표시하였습니다
 - Redux, Redux-Saga를 사용하여 위치정보를 요청하고 정리하였습니다.

### Source
- 검색 기능을 수행하는 Custom Hook
```
const getSearchList = async (text) => {
    const response = await getAddress(text);
    return response;
};

const useSearch = (text) => {
    const [searchFocus, setSearchFocus] = useState(false);
    const [searchList, setSearchList] = useState([]);
    const handleSearchList = useCallback(
        async (text) => {
            const newSearchList = await getSearchList(text);
            setSearchList(newSearchList);
        },
        [setSearchList]
    );
    useEffect(() => {
        handleSearchList(text);
    }, [text, handleSearchList]);
    return [searchFocus, searchList, setSearchFocus, handleSearchList];
};
```
- 현재위치를 전역으로 dispatch하는 Custom Hook
```
const useLocation = () => {
    const current = useSelector((state) => state.location);
    const dispatch = useDispatch();
    const setCurrent = useCallback(
        (newLocation) => {
            dispatch(setLocationSaga(newLocation));
        },
        [dispatch]
    );
    return [current, setCurrent];
};
```

- Redux를 이용해 위치정보 관리
```
const initialState = {
    cctv: [],
    children: [],
    parkinglot: [],
};

const parkLocation = handleActions(
    {
        [SET_CCTV]: (state, { payload: cctv }) => ({
            ...state,
            cctv: cctv,
        }),
        [SET_CHILDREN]: (state, { payload: children }) => ({
            ...state,
            children: children,
        }),
        [SET_PARKING_LOT]: (state, { payload: parkinglot }) => ({
            ...state,
            parkinglot: parkinglot,
        }),
    },
    initialState
);
```

- Redux를 이용해 위치정보 관리
```
const initialState = {
    cctv: [],
    children: [],
    parkinglot: [],
};

const parkLocation = handleActions(
    {
        [SET_CCTV]: (state, { payload: cctv }) => ({
            ...state,
            cctv: cctv,
        }),
        [SET_CHILDREN]: (state, { payload: children }) => ({
            ...state,
            children: children,
        }),
        [SET_PARKING_LOT]: (state, { payload: parkinglot }) => ({
            ...state,
            parkinglot: parkinglot,
        }),
    },
    initialState
);
```
