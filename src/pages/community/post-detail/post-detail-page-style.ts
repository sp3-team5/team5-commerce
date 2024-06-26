import styled from 'styled-components';

const PostDetailPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  margin-top: 104px;
`;

const HeaderArea = styled.section`
  display: flex;
  flex-direction: column;

  width: 1197px;
  margin: 0 auto;
  padding-bottom: 21px;

  border-bottom: 1px solid ${({ theme }) => theme.color.gray_9E9E9E};
`;

const HeaderButtonBox = styled.div`
  margin-bottom: 48px;
`;

const BacktoListButton = styled.button`
  padding: 10px 32px;

  font-size: 1.6rem;
  font-weight: 700;

  border: 1px solid ${({ theme }) => theme.color.black_000000};
  border-radius: 6px;
`;

const HeaderButtonText = styled.span`
  display: inline-block;

  width: 110px;
  height: 20px;

  font-size: 1.6rem;
  font-weight: 700;
`;

const HeaderTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 22px;
`;

const RegionSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray_9E9E9E};
`;

const HeaderTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
`;

const HeaderSpanWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

const HeaderDate = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray_9E9E9E};
`;

const CommunityStatusBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexBox = styled.div`
  display: flex;
`;

const EditBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const StatusText = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray_9E9E9E};
`;

const PostFunctionBox = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const PostFunctionButton = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.color.gray_9E9E9E};
`;

const Divider = styled.div`
  width: 1px;
  height: 12px;
  margin: 0 12px;
  border-right: 1px solid ${({ theme }) => theme.color.gray_9E9E9E};
`;

const ContentsArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 1197px;
  margin: 0 auto;
  padding-top: 60px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  align-items: center;
  justify-content: center;
`;

const ContentsParagraph = styled.p`
  font-size: 2rem;
  font-weight: 400;
`;

const RecommendButtonBox = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 56px;
`;

const LikeButton = styled.button`
  cursor: pointer;

  position: relative;

  width: 174px;
  height: 48px;
  padding-left: 32px;

  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white_FFFFFF};

  background-color: ${({ theme }) => theme.color.blue_43ADFF};
  border: 1px solid ${({ theme }) => theme.color.blue_43ADFF};
  border-radius: 54px;
`;

const UnlikeButton = styled.button`
  cursor: pointer;

  position: relative;

  width: 174px;
  height: 48px;
  padding-left: 32px;

  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.black_000000};

  background-color: ${({ theme }) => theme.color.white_FFFFFF};
  border: 1px solid ${({ theme }) => theme.color.black_000000};
  border-radius: 54px;
`;

const LikeIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 32px;
  transform: translateY(-50%);

  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const LikeButtonText = styled.span`
  display: inline-block;

  width: 76px;
  height: 20px;
  margin-left: 18px;

  font-size: 1.6rem;
  font-weight: 700;
`;

const CommentArea = styled.section`
  display: flex;
  flex-direction: column;

  width: 1197px;
  margin: 0 auto;
  margin-top: 160px;
`;

const ComentBox = styled.div`
  display: flex;
  gap: 25px;

  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;

  border-top: 1px solid ${({ theme }) => theme.color.gray_9E9E9E};
`;

const ProfileImageWrapper = styled.div`
  position: relative;

  overflow: hidden;
  flex-shrink: 0;

  width: 60px;
  height: 60px;

  border-radius: 50%;
`;

const ProfileNickname = styled.span`
  display: flex;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray_9E9E9E};
`;

const PostDateText = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray_9E9E9E};
`;

const ComentPostBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const ComentDeleteWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ComentDeleteButton = styled.button`
  display: flex;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.red_F5511D};
`;

const ComentTextareaBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ComentTextarea = styled.textarea`
  width: 100%;
  height: 138px;
  padding: 30px 37px;

  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.gray_9E9E9E};

  background-color: ${({ theme }) => theme.color.gray_F9F9F9};
  border: 1px solid ${({ theme }) => theme.color.gray_F9F9F9};
  border-radius: 10px;

  &::placeholder {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.gray_9E9E9E};
  }
`;

const Coment = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.gray_9E9E9E};
`;

const ComentPostButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const ComentPostButton = styled.button`
  display: flex;

  padding: 10px 32px;

  font-size: 1.6rem;
  font-weight: 700;
  line-height: 20px;
  color: ${({ theme }) => theme.color.black_000000};

  border: 1px solid ${({ theme }) => theme.color.black_000000};
  border-radius: 6px;
`;

const ReplyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

const ReplyWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

const ReplyPostButtonWrapper = styled.div`
  display: flex;
`;

const ReplyPostStatus = styled.div`
  display: flex;

  margin-top: 10px;
  padding: 10px 20px;

  font-size: 1.6rem;
  font-weight: 700;
  line-height: 20px;
  color: ${({ theme }) => theme.color.black_000000};

  border: 1px solid ${({ theme }) => theme.color.black_000000};
  border-radius: 32px;
`;

const ReplyPostButton = styled.button`
  display: flex;

  padding: 10px 32px;

  font-size: 1.6rem;
  font-weight: 700;
  line-height: 20px;
  color: ${({ theme }) => theme.color.blue_43ADFF};

  border: 1px solid ${({ theme }) => theme.color.blue_43ADFF};
  border-radius: 6px;
`;

const ReplyDivider = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 27px;
  border-top: 1px solid ${({ theme }) => theme.color.gray_F9F9F9};
`;

const EmptySpace = styled.div`
  height: 20px;
`;

const ContentImageWrapper = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
`;

const ReplyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ReplyFunctionBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export {
  PostDetailPage,
  HeaderArea,
  HeaderButtonBox,
  BacktoListButton,
  HeaderButtonText,
  HeaderTitleBox,
  RegionSpan,
  HeaderTitle,
  HeaderSpanWrapper,
  HeaderDate,
  FlexBox,
  EditBox,
  CommunityStatusBox,
  StatusText,
  PostFunctionBox,
  PostFunctionButton,
  Divider,
  ContentsArea,
  Contents,
  ContentsParagraph,
  RecommendButtonBox,
  LikeButton,
  UnlikeButton,
  LikeIconWrapper,
  LikeButtonText,
  CommentArea,
  ComentBox,
  ProfileImageWrapper,
  ProfileNickname,
  PostDateText,
  Coment,
  ComentPostBox,
  ComentTextareaBox,
  ComentTextarea,
  ComentPostButtonWrapper,
  ComentPostButton,
  ComentDeleteButton,
  ComentDeleteWrapper,
  ReplyBox,
  ReplyWrapper,
  ReplyPostButtonWrapper,
  ReplyPostButton,
  ReplyPostStatus,
  ReplyDivider,
  EmptySpace,
  ContentImageWrapper,
  ReplyForm,
  ReplyFunctionBox,
};
