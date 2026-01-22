import { useEffect, FC, Dispatch, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { submitAPI } from "../../utils/temp";

interface BookingFormProps {
  dispatch: Dispatch<{ type: string; date: Date }>;
  availableTimes: {
    times: string[];
  };
}

const BookingForm: FC<BookingFormProps> = ({
  availableTimes,
  dispatch,
}): ReactElement => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      date: new Date().toLocaleDateString("en-CA"),
      time: availableTimes.times[0],
      guests: 1,
      occasion: "birthday",
    },
    onSubmit: (values) => {
      const response: boolean = submitAPI(values);
      if (response) {
        localStorage.setItem("Bookings", JSON.stringify(values));
        navigate("/confirmation");
      }
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string()
        .oneOf(availableTimes.times)
        .required("Time is required"),
      guests: Yup.number()
        .min(1, "Must be at least 1")
        .max(10, "Must be at most 10")
        .required("Number of guests is required"),
      occasion: Yup.string()
        .oneOf(["birthday", "engagement", "anniversary"])
        .required("Occasion is required"),
    }),
  });

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
  }, [formik.values.date, dispatch]);

  return (
    <Box as="section" id="menu" py={20} px={4} mt="140px">
      <Container maxW="container.md">
        <VStack spacing={8} align="stretch">
          <Heading
            as="h1"
            size="2xl"
            fontFamily="heading"
            textAlign="center"
          >
            Book Now
          </Heading>

          <Box
            as="form"
            onSubmit={formik.handleSubmit}
            noValidate
            bg="white"
            p={8}
            borderRadius="xl"
            boxShadow="lg"
          >
            <VStack gap={6} align="stretch">
              <FormControl isInvalid={!!(formik.touched.date && formik.errors.date)}>
                <FormLabel htmlFor="res-date" fontWeight="bold" color="brand.500">
                  Choose date
                </FormLabel>
                <Input
                  type="date"
                  id="res-date"
                  data-testid="res-date"
                  size="lg"
                  {...formik.getFieldProps("date")}
                />
                <FormErrorMessage data-testid="res-date-error">
                  {formik.errors.date}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!(formik.touched.time && formik.errors.time)}>
                <FormLabel htmlFor="res-time" fontWeight="bold" color="brand.500">
                  Choose time
                </FormLabel>
                <Select
                  id="res-time"
                  data-testid="res-time"
                  size="lg"
                  {...formik.getFieldProps("time")}
                >
                  {availableTimes.times.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage data-testid="res-time-error">
                  {formik.errors.time}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!(formik.touched.guests && formik.errors.guests)}>
                <FormLabel htmlFor="guests" fontWeight="bold" color="brand.500">
                  Number of guests
                </FormLabel>
                <Input
                  type="number"
                  id="guests"
                  data-testid="guests"
                  placeholder="1"
                  min={1}
                  max={10}
                  size="lg"
                  {...formik.getFieldProps("guests")}
                />
                <FormErrorMessage data-testid="guests-error">
                  {formik.errors.guests}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!(formik.touched.occasion && formik.errors.occasion)}>
                <FormLabel htmlFor="occasion" fontWeight="bold" color="brand.500">
                  Occasion
                </FormLabel>
                <Select
                  id="occasion"
                  data-testid="occasion"
                  size="lg"
                  {...formik.getFieldProps("occasion")}
                >
                  <option value="birthday">Birthday</option>
                  <option value="engagement">Engagement</option>
                  <option value="anniversary">Anniversary</option>
                </Select>
                <FormErrorMessage data-testid="occasion-error">
                  {formik.errors.occasion}
                </FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                data-testid="submit-btn"
                bg="accent.500"
                color="black"
                size="md"
                width="100%"
                mt={4}
                _hover={{
                  bg: "accent.600",
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                Make Your reservation
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default BookingForm;
