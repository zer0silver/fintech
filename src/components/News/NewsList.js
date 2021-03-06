import React from 'react';

const NewsList = ({searchResultList}) => {
  return <div>
    {
      // react-jsx-dev-runtime.development.js:117 Warning: Each child in a list should have a unique "key" prop.
      // 에러 해결 하기 -> key를 추가해준다
      searchResultList.map(({title,url}, index)=>{ // 두번째 인자는 인덱스 이다. 콜백함수?
        return(
          <>
            <a href={url} key={index}>{title}</a>
            <br></br>
          </>
        )
      })
    }
  </div>
}

export default NewsList;