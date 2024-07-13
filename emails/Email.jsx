import {
  Html,
  Tailwind,
  Text,
  Section,
  Body,
  Row,
  Container,
} from "@react-email/components";

const data = {
  name: "RedMan",
  email: "reddot@wutang.com",
  subject: "Let's make a banger together!",
  message:
    "Bring Method Man and the crew to my studio tomorrow. I have snacks and juice boxes if anyone gets peckish. Any time after daybreak is cool to come by.",
};

const main = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const Email = () => {
  const { name, email, subject, message } = data;

  return (
    <Html lang="en">
      <Tailwind>
        <Body className="bg-slate-100" style={main}>
          <Container className="flex justify-center items-center my-8 mx-auto max-w-[950px] bg-white w-fit px-10 py-4 h-full">
            <Text className="text-slate-600 text-3xl font-bold">
              You have a new message from your{" "}
              <span className=" text-blue-400">Portfolio Website</span>!
            </Text>
            <Section className="bg-slate-200 w-full h-[2px] mb-4" />
            {[
              { title: "name", text: name },
              { title: "email", text: email },
              { title: "subject", text: subject },
              { title: "message", text: message },
            ].map((item, i) => {
              return i < 3 ? (
                <Row key={item.title}>
                  <Text className="my-1">
                    <span className="h-fit font-bold text-lg mr-4 capitalize text-blue-600">
                      {item.title}:
                    </span>
                    <span className="text-lg text-slate-800">{item.text}</span>
                  </Text>
                </Row>
              ) : (
                <Row>
                  <Text className="font-bold text-xl mb-0 capitalize text-blue-600">
                    {item.title}:
                  </Text>
                  <Text className="text-base text-slate-900">{item.text}</Text>
                </Row>
              );
            })}
            <Section className="bg-slate-200 w-full h-[2px] my-4" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
