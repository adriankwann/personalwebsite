import React, { useEffect } from "react";
import { VStack, HStack, Box, Heading, Text } from "@chakra-ui/react";
import ProjectCard from "./projectcard";
import dBridge from "./assets/dbridge.png";
import babpoll from "./assets/babpoll.png";
import AOS from "aos";
import "aos/dist/aos.css";
import saas from "./assets/saas.png";
import zetta from "./assets/zetta.png";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const delayStep = 100;

  const projects = [
    {
      title: "dBridge",
      description:
        "Allows users to find the best conversion rates and trading strategies between two tokens of their choice.",
      image:
        "https://lh3.googleusercontent.com/pw/AJFCJaUy_STOkK0qhYvdA71P9AGNYF7sb3hf80kppqYgKxilRRAoBljAJo3Cso6F6TEBYoqMQ56FpZ_eRGTQKNtYR3-J0rYvbVvbzTr_bCPtVy9X9GhQ3ei-IG2lAm3aHeR26x1ufr0_XS1W_S-Zl8LClQcUN-7_XgBTivbGY33unf_0LsOx6FKgwHpF4Gu_EV69VHjYwILWahorB-X-hbxajq0fj9NuFH44_Z-QDZgnJU9UIe9HElhn7kZUQLamJXdOv-hiv8gTD1aQtt3hmc7C8fKeWFax9_NJHmjzBq2o-8fCxKlgZUa7omCvg6BfNytByxKDQl18Jai6ytWwvhcVhnK5g2C2yvzIxM_kA4AXZW8Rd8rMPqFThBsstty1ebi5qpomxwcLlymmQxJE_KDoA3Qsrlac_5JnAtuFSuG9QQeaLZvxP2hVbzu5AfisDJxPfbPtJJUIt9qF7D1zChuFFEfOATkDqUC0BrpbE58mr9X6xVynUIuvZt4iAELALSV74_B-0F5zv2Ru83dG7Mj5dhTjVOSs-oxnsu3SgehLjNSc_CXzeWzgf-qgzcQCAAmqX4tsh-DO-r-aRuV5X7X7bHQJgYcg-v85ZvgZ_YzMqhlHjBBlaDUxKmWS-Ut99hvWzK-eAwyNe0_mV9PnbCgudRjm9edIPeXh2PSHonUxBxC2Aai3G81M_lSDRs6l1OZP5DaWQnHcczhH1QIZsIEX7T6beVsescH38-_RJg0cW1Mn9yLZPwjYOrd8vFHgoAog_n1t4dYql3FC6ARE6E5Hgv33jAxHIKFEvqCiZgnOC-jFma2ljqZyfUbTaByuKa7SvaMUD46tC9TuKv5JT1T6OEK8mts4teqLjbmKerX1wZbFoc8kU_RekEy3Fs_i7glfwmPFebTjz7uW_NR3fAm77WcDjnLa0BD0uFRq7JJgn1lNGrEunUV4ya1_1MgstIfZ-QMNokYOvRH5xYKytcHQMWZabvX8Ntg_dw1XMJWiE6rpVITdzZq6T9pTc8kKd6lFAbntznQ3whq0sy7PgBf0jg2GMmFR2R-TF4P2N79pY_Qi7r8ngLLe6a0UjNtJb8UX7SJwmfWi-ipAxjoZ4lAFD0auEtu8PhYxWmGiBMooNr5llxl24Bl9iVlTN83Lak8LTzu3gqfe2nUpmjo=w2878-h1580-s-no?authuser=0", // Update the image value here
      technologies: ["React", "Solidity", "JavaScript"],
    },
    {
      title: "B@BPoll",
      description:
        "A zero-knowledge anonymous voting protocol deployed on polygon, using Semaphore's zkSNARKs library.",
      image:
        "https://lh3.googleusercontent.com/pw/AJFCJaXwCty6PjwAxiLr0HYFS7ghh9AChib7Vf5wOyzefb16H7DDspJ3qKnkLkNFZ5P7-kTCeehSiAa7zhKTEx_WewrUDvoREeuqEGZMqz3_Arm73LWe0WmUemcQnP-SYqGWGGraV_WTqeoKVRlTLXCnpPFih8zxRoLN3yOTp0BfVGL1HNuMH2ALThqbeetgWczGM8BNrwc6pk8yhEr4tPv1P4hSy-24NIYQp1Qd8ZVYh_IO2lBkKUNLZ7LJWOvcrMswrOnIKvW-M3Yn6LTptPBqD9oxCrUAikicgylR1SyKAPu8rARS9-Um189u3IHR456ZQM4N2nsOajIvUFFYd29FeX-ug_v14wEoZJ2lB43NaZj0Bh4hJYKD0rivJNpNH-qMpNvzqDM0JMCCluWwdmp8nHxQ2EyfmuldvgJwDK0JW7qQstlATski4dO2TGHgCEtaH2DlTY4pAXe6YsPGCX4KXMUT3ZwY8V3HT03rlpH49j71VDt7iyZXUB5_sa9gAXOnjFLakeMfQNb5XdKwChku6vVU2d2xti0soXU-jN00YSU_zMMwerawzG80W2o_NFjPYdd8rvO3KaIAziMR3dTrrBS3PdGwOrr5zvKq9lC7Kk_TrhiiQ-2pqvHoAq7gUYu2BsaL0V52b-YVcEsNtCuxJWtQGdy_8Ootv2x2iMtytXAkr-QVP7fidiShamFJ4b_moXvbghfiU7wpqBl85qfQxI-uuQP5zFnN79yIZUx26hJZbEML1oduzR363mDXylk9FOAFs0fNd0vFpNXojcwoGc-jClrEpkNTaVbAccsuibfz3q26dB81P2gklqg0u5dnD_mJGkHAx5V8F8lDXnaigfZeiEjUcsj8mN4m_OPzlHIR9IUqWSgKIii1Owk9pjgB3uXAHR-Sk0f-Y_OjhCMA99nq0b-2U5zg42h2HsE2ODLHOjYNzGJ8CEkMMQhuZVPdt38Ue0RL3WdaFRItG7hJ0yGbpJ0RkTkc78H-AWvNOFNyTRbaK3dY962Lr3dwSHIO1HZJS-4SlgulmnADRcziZw0DUSQPwEdG9p8xhy0vtoa2x6EK5xT2j6t5g6uv5Dv4flKB8YUaH_bOPUBgmS4x2ODGYvVNKXJF5yNbmtZFvXESKkUmDAe5BFf73J8J8yCgy_VBgdGtedDrTZw=w2984-h1596-s-no?authuser=0",
      technologies: ["React", "Solidity", "TypeScript", "Chakra"],
    },
    {
      title: "Zettablock's AI Assistant",
      description:
        "A chatbot that allows users to use natural language to setup an API automatically with required blockchain data.",
      image:
        "https://lh3.googleusercontent.com/pw/AJFCJaXQ-RztVUfwNDrVQmQcKw1k1TXA5AUDcfjqQ-ZlLs1U39WYf0c2REReisDWjCDQLSwyGftrBaT5kp76QtK0LZNJPCYQPQkTbBsM6oYWO-raIYc2qdK-E4a_AGSwOSwlwJYbRY-IxaOsFKAoIIDsaHNg82gBiVHlYEzs7mOTQNWjuVBjmNq7lIk6scfej1VKjmj6ScjNFivl0163mgYEHshjyf7eO5rE4OVm7Fl7ilTBhG3CBe3xb83hcKGYR-V94QUevFWU7KG8C7gLOyJggM5FXj5C-iisANX5BtuHp5ileIpvchYFJKnCk-TxKlh21ulQ8KqkXJrTyi1vUrB8rppbGChgoSSv9WlGpTX6B_Nw6twwZgbEzBXo9wvq0Wnjg8Q4yqyKr8Lf1aGJKT2pzrmjiTnnGErqIFzNBJvPVD43Akj7jjf37GXWivcJSCL8c2hRHbmK0FFvqPpxATuZ9VJ3H95dqxDg49JpmYpiRusFW5DAC2bL3tvQwZZGpI2qXVL-1TvErN0Mo_imefv-qhTngF4SIO6K9jX9QTZdQ_huHljw-cafxyRF0IupcjJGeNwItJ2MduEqbSU-mUpMrMPGZo1am4LqWTilX8OEl3t46jcUI3G0DLn_2v7UwcxMPxD7ArX--zTdB9bbtoceiq_gJTvIEtBtnRxhqKXAitdBRDSMWL1OTzwCndPsgBbS0tOkds9iV9J7fgdYELXjjP9kzXAeDtZecyi5-RPlmz73XAC9CPloalQSQJuEXInBRCf2eJj0YcZde8X1aCHs5Ao1_bXlQlbUDkzQsh5kKVlV_tHLlF7Z5ZzPDaUTQjNEinukHHnjW4TNqGhWY1FQCaVUNWUEHTQcMw0sH27tjDI5zkStdZCJ_HMjLYOXWydH23x_TNHAfGqlSDlvpSpk3RMjbrYHZgShThyHtYgpGRklcwM8OlqU0L7moUpYFe4ksraosWGn8fU1Yy26ah3LlEeXi_Vk_yP4wm5rLuWEgdDIgw5rVZ6knkascG_sIpT7Y_UHRnL3fWmKAurWvFUiWi9odPZyUJkumvHXvWtp_10LL_mliBxVuQqiDTjrQdC2hSQeHsdduOBjlTazglDUq65KXs2VrMXt1cZ79Rvdv0J9U_qWIEPBYE-UPTY-e6A3xOS5QcpOjv2Z81E=w2161-h1350-s-no?authuser=0",
      technologies: ["Golang", "Gin", "AWS", "GPT API"],
    },
    {
      title: "Gitlet",
      description:
        "A git-like version control system, allowing users to create, add, commit, checkout, merge, and reset files in a local repository.",
      image:
        "https://cloudstudio.com.au/wp-content/uploads/2021/06/GitWorkflow-4.png",
      technologies: ["Java"],
    },
    {
      title: "SAAS Website",
      description:
        "Built the SAAS website. This website serves as a landing page for clients and prospective applicants.",
      image:
        "https://lh3.googleusercontent.com/pw/AJFCJaWLDbqJLM5oiVTrNbvec0oQzx09p8RJimBMy09W-P-EcjFLHosyRRvg8q8teGE3P1etgaJLAwy1YrRYj2Ll_kvYHsGIhzpCLzOFJDkpgV-qjIItD4Q1cZ7QadrQESQvd_5g06XAYlxLgwxWAbYz9rMNLcYuwlwSHdawEVlbOBgUdAb05_k3WQCFrKfEm5ep2ntjOHYsnGYaR5FxIq8V8p0JalOcH98wH6ZK5MKBP0YZa5Rvp-kBtlARVUpAva9AwSr2SSylx0LlA55FV35AuH6sqU3Hcz02MEzKq3VX6LiW4nHMx00Y4O7HqHA7BfWF9JcicTG8Va76v-teT5eMS8VT5rNzDpa6xGvzWhHjXcYHlRNqD1KGLcFU_aM9IuufbfjFnCV-cyVpEmGIfdoH0ktNvi8BR6uRAOW5-cILHD02AdidF2HFNHhfsL6yTz8Df3ZBY3Hxqz3sjoowvd1kIPA14SuYWK4OE7sT4jtIgvSvpSmDfUyPc1ShQx4JbFDgMmxNH7wE04X6Ycjz_pR4LdBdn94zS2-Nq6EmMzgxY6y23s02QrsjTZtSopmcwh4MKTVdPHlO1JHsWi9HvxwkTcRB-46B3GAti4EKZ3I1tIhSyEKswTP1yjFAO0OX5TVWK8t5KmB3PwbEiLGGlxw_gwEVTNqQtelTu0GyugnzNO5NdbwLanb5llCzbOtDSxcwxuq7mqki_INy5blkAi-WhoqDzW3xEeswqJXEvb_3yXojLsHeAgmLNlLeL-rIZKm0U7AFxZWfvpGMP9e6h-onkKZq0yT4Nud9BUM4dTIYM-XaViSfSLHqXiRBwRnFDDXco3RaJE9kyzl-_9wkSeUVAMI1fZgehV_cRq3uhqJ0Jcqb2pz5Gvnvi2BWilHwXTTRdNl970W1gAAWJk1CskljfbMNPaJmZPmFeCbzJFcY-OP9PvHET3DeBuOQDlYgjmAicSdNpnKRcFhgjEnUPR2muY3jh5lsyUMCSdNWBfcHdpOutt1df9sv4AdE2kjL4zNLlMXVYnlO0u8g07u2DVl3SJEhBCGUEtqwInEFqAFSkMmqF-yNztqF0LculrNsifa1ktyvCI319BBp_imy2GnqalMluCgWuMhL0InN2KX4fPq7cBbjo5uzuKgM4956ff0YRh-2w5XJp3SgtF4=w3016-h1634-s-no?authuser=0",
      technologies: ["React", "Django", "Chakra"],
    },
  ];

  return (
    <Box
      display="flex"
      alignItems="flex-start" // Align items to the top
      justifyContent="center"
      height="auto"
      marginTop="50px"
    >
      <VStack spacing="20px" align="center">
        <Heading
          size="lg"
          color="transparent"
          bgGradient="linear(to-r, #3e64ff, #1dd3bd)"
          bgClip="text"
          data-aos="fade-up"
        >
          Projects
        </Heading>

        <HStack spacing="20px">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
            />
          ))}
        </HStack>
        <HStack spacing="20px">
          {projects.slice(3, 6).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              data-aos="fade-in"
              data-aos-delay={index * delayStep}
            />
          ))}
        </HStack>
      </VStack>
    </Box>
  );
}
