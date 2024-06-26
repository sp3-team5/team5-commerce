import styled from 'styled-components';

const CommunityListPage = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 126px;
`;

const MainArea = styled.section`
  width: 1197px;
`;

const HeaderArea = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 25px;
  padding-bottom: 24px;

  border-bottom: 1px solid ${({ theme }) => theme.color.gray_9E9E9E};
`;

const HeaderTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
`;

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 20px;
  width: 13px;
  height: 12px;
`;

const SearchBar = styled.input`
  width: 440px;
  height: 40px;
  padding: 6px 41px;

  border: 1px solid ${({ theme }) => theme.color.gray_9E9E9E};
  border-radius: 30px;
`;

const NewPostButton = styled.button`
  position: relative;

  align-items: center;

  height: 40px;
  padding: 10px 20px;

  color: ${({ theme }) => theme.color.white_FFFFFF};

  background-color: ${({ theme }) => theme.color.black_000000};
  border-radius: 6px;
`;

const PostButtonIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  display: flex;

  width: 18px;
  height: 18px;
`;

const ButtonTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 96px;
  height: 20px;
  margin-left: 10px;
`;

const ContentsArea = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;

  width: 100%;
  margin-bottom: 80px;
`;

const CategoryArea = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const RegionSelectButton = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 10px 40px 10px 20px;

  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray_9E9E9E};

  border: 1px solid ${({ theme }) => theme.color.gray_BDBDBD};
  border-radius: 6px;
`;

const DownArrowIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 12px;
  height: 12px;
`;

const DropDownBox = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.modal};
  top: 36px;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;

  min-width: 150px;
  padding: 20px 30px;

  background-color: ${({ theme }) => theme.color.white_FFFFFF};
  border: 1px solid ${({ theme }) => theme.color.gray_BDBDBD};
  border-radius: 6px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
`;

const RegionFormStyle = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 40px;

  label {
    width: 68px;

    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color.gray_9E9E9E};
    text-align: left;
  }

  input {
    width: 20px;
    height: 20px;
  }
`;

const RegionCheckBoxWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const FilterWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const FilterContent = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray_9E9E9E};

  &:hover {
    font-weight: 700;
    color: ${({ theme }) => theme.color.black_000000};
  }
`;

const ItemListArea = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  height: 904px;
`;

const ItemBox = styled.div`
  cursor: pointer;

  position: relative;

  gap: 20px;

  width: 100%;
  height: 134px;
  padding: 34px 286px 18px 146px;

  border: 1px solid ${({ theme }) => theme.color.gray_F3F3F3};
  border-radius: 6px;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 5px 5px 10px rgb(0 0 0 / 15%);
  }
`;

const ThumnailImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);

  width: 95px;
  height: 95px;
`;

const TextContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ItemRegiontext = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray_9E9E9E};
`;

const ItemTitleText = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
`;

const ItemSubTextBox = styled.div`
  display: flex;
  align-items: center;
`;

const ItemSubText = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray_9E9E9E};
`;

const ItemSubDivider = styled.div`
  width: 1px;
  height: 12px;
  margin: 0 12px;
  border-right: 1px solid ${({ theme }) => theme.color.gray_9E9E9E};
`;

const ArrowIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 22px;
  transform: translateY(-50%);

  width: 48px;
  height: 48px;

  fill: ${({ theme }) => theme.color.black_000000};

  ${ItemBox}:hover & {
    fill: #43adff;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;

  margin-top: 13px;

  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.blue_43ADFF};
`;

export {
  CommunityListPage,
  MainArea,
  HeaderArea,
  HeaderTitle,
  SearchBarContainer,
  SearchIconWrapper,
  SearchBar,
  NewPostButton,
  PostButtonIconWrapper,
  ButtonTextWrapper,
  ContentsArea,
  CategoryArea,
  RegionSelectButton,
  ArrowIconWrapper,
  DropDownBox,
  RegionFormStyle,
  RegionCheckBoxWrapper,
  FilterWrapper,
  FilterContent,
  ItemListArea,
  ItemBox,
  ThumnailImageWrapper,
  TextContentsWrapper,
  ItemRegiontext,
  ItemTitleText,
  ItemSubTextBox,
  ItemSubText,
  ItemSubDivider,
  DownArrowIconWrapper,
  PaginationWrapper,
};
