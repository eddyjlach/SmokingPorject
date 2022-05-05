import React from "react";
import styled from "styled-components";
import { useState } from "react";
const App = () => {
  const [packs, setPacks] = useState(null);
  const [dollars, setDollars] = useState(null);
  const [day, setDay] = useState(null);
  const [week, setWeek] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [tenYears, setTenYears] = useState(null);
  const [twentyYears, setTwentyYears] = useState(null);
  const [thirtyYears, setThirtyYears] = useState(null);
  const [time, setTime] = useState(null);

  const calculation = (event) => {
    event.preventDefault();
    const day = packs * dollars;
    setDay(day);
    const week = day * 7;
    setWeek(week);
    const month = week * 4;
    setMonth(month);
    const year = month * 12;
    setYear(year);
    const tenYears = year * 10;
    setTenYears(tenYears);
    const twentyYears = tenYears * 2;
    setTwentyYears(twentyYears);
    const thirtyYears = tenYears * 3;
    setThirtyYears(thirtyYears);
  };
  console.log(packs, dollars, day);

  return (
    <>
      <MainContainer>
        <Container>
          <Title>How much would you save if you stopped smoking?</Title>
          <h2>Health Effects</h2>
          <TextCont>
            <span>
              Smoking leads to disease and disability and harms nearly every
              organ of the body. More than 16 million Americans are living with
              a disease caused by smoking. For every person who dies because of
              smoking, at least 30 people live with a serious smoking-related
              illness. Smoking causes cancer, heart disease, stroke, lung
              diseases, diabetes, and chronic obstructive pulmonary disease
              (COPD), which includes emphysema and chronic bronchitis. Smoking
              also increases risk for tuberculosis, certain eye diseases, and
              problems of the immune system, including rheumatoid arthritis.
              Secondhand smoke exposure contributes to approximately 41,000
              deaths among nonsmoking adults and 400 deaths in infants each
              year. Secondhand smoke causes stroke, lung cancer, and coronary
              heart disease in adults. Children who are exposed to secondhand
              smoke are at increased risk for sudden infant death syndrome,
              acute respiratory infections, middle ear disease, more severe
              asthma, respiratory symptoms, and slowed lung growth.
            </span>
          </TextCont>
          <h2>Smoking Calculator</h2>
          <Form on onSubmit={calculation}>
            <div>
              <Label> How many packs do you smoke per week?</Label>
              <Input
                type={"number"}
                onChange={(ev) => {
                  setPacks(ev.currentTarget.value);
                }}
                required
              ></Input>
            </div>
            <div>
              <Label>How much is your pack of cigarettes?</Label>
              <Input
                type={"number"}
                onChange={(ev) => {
                  setDollars(ev.currentTarget.value);
                }}
                required
              ></Input>
            </div>
            <div>
              <button>calculate</button>
            </div>
          </Form>
          <Spending>You Spend:</Spending>
          <Day>
            <Span>{day}$</Span> per day
          </Day>
          <Week>
            <Span>{week}$ </Span>per week
          </Week>
          <Month>
            <Span>{month}$</Span> per month
          </Month>
          <Year>
            <Span>{year}$</Span> per year
          </Year>
          <TenYears>
            <Span>{tenYears}$</Span> over ten years
          </TenYears>
          <TwentyYears>
            <Span>{twentyYears}$</Span> over twenty years
          </TwentyYears>
          <ThirtyYears>
            <Span>{thirtyYears}$</Span> over thrity years{" "}
          </ThirtyYears>
        </Container>
      </MainContainer>
    </>
  );
};
const TextCont = styled.div`
  max-width: 50vw;
`;
const Spending = styled.h1``;
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.h1``;
const Container = styled.div`
  line-height: 40px;
`;
const Day = styled.div``;
const Week = styled.div``;
const Span = styled.span`
  font-style: italic;
`;
const Month = styled.div``;
const Year = styled.div``;
const TenYears = styled.div``;
const TwentyYears = styled.div``;
const ThirtyYears = styled.div``;
const Form = styled.form``;
const Label = styled.label``;
const Input = styled.input`
  margin-left: 10px;
`;
export default App;
