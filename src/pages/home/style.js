import styled from "styled-components";

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;   
    padding-right: 10px;
    background: f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;

    .topic-pic {
        display: block;
        float: left;
        height: 32px;
        width: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;

    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 12px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;

    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }

    .desc {
        line-height: 24px
        font-size: 10px;
        color: #999;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

export const RecommendWrapper = styled.div`
    overflow: hidden;
    margin: 30px 0;
    width: 280px;
    border: 1px solid #dcdcdc;
    border-radius: 15px;
`;

export const RecommendItem = styled.div`
    width: 260px;
    height: 50px;
    margin: 10px;
    background: url(https://upload.jianshu.io/users/upload_avatars/3730494/a5859e59-509d-4d2c-a594-d8d6e5c23d68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96);
    background-size: contain;
`;

export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 15px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
`;
