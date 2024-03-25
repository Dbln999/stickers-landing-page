import { useCallback, useEffect } from "react";
import { InputFormWrapper } from "../../components/InputFormWrapper/InputFormWrapper.tsx";
import { useTelegram } from "../../hooks/useTelegram.ts";
import { formActions } from "../../store/formSlice/formSlice.ts";
import { useAppDispatch, useAppSelector } from "../../store/store.ts";
import cls from './PaymentPage.module.css'
const PaymentPage = () => {
  const { tg } = useTelegram();
  const dispatch = useAppDispatch();
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(formActions.updateForm({ city: value || "" }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(formActions.updateForm({ country: e.target.value || "" }));
    },
    [dispatch]
  );

  const onChangeName = useCallback(
    (value?: string) => {
      dispatch(formActions.updateForm({ name: value || "" }));
    },
    [dispatch]
  );

  const onChangeAddress = useCallback(
    (value?: string) => {
      dispatch(formActions.updateForm({ address: value || "" }));
    },
    [dispatch]
  );

  const onChangePostcode = useCallback(
    (value?: string) => {
      dispatch(formActions.updateForm({ postcode: value || "" }));
    },
    [dispatch]
  );

  const onChangePhoneNumber = useCallback(
    (value?: string) => {
      dispatch(formActions.updateForm({ phoneNumber: value || "" }));
    },
    [dispatch]
  );

  const onChangeEmail = useCallback(
    (value?: string) => {
      dispatch(formActions.updateForm({ email: value || "" }));
    },
    [dispatch]
  );

  const form = useAppSelector((state) => state.form?.form);

  const onSendData = useCallback(() => {
    tg.sendData(JSON.stringify(form));
  }, [form]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Send Data",
    });
  }, []);

  useEffect(() => {
    if (
      !form?.name ||
      !/^[a-zA-Z\s]+$/.test(form.name) ||
      !form.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email!) ||
      !form.phoneNumber ||
      !form.postcode ||
      !form.address ||
      !form.country ||
      !form.city
    ) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [
    form?.name,
    form.email,
    form.phoneNumber,
    form.postcode,
    form.address,
    form.city,
  ]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        background: "var(--tg-theme-bg-color)",
      }}
    >
      <InputFormWrapper onChange={onChangeName} title="Name"></InputFormWrapper>
      <div className={cls.selectWrapper}>
        <label htmlFor="select" className={cls.countryLabel}>Country</label>
        <select onChange={onChangeCountry} name={"select"} className={cls.select}>
          <option value="EE">Estonia</option>
          <option value="LV">Latvia</option>
          <option value="LT">Lithuania</option>
        </select>
      </div>
      <InputFormWrapper onChange={onChangeCity} title="City"></InputFormWrapper>
      <InputFormWrapper
        onChange={onChangeAddress}
        title="Address"
      ></InputFormWrapper>
      <InputFormWrapper
        onChange={onChangePostcode}
        title="Post code"
        type="number"
      ></InputFormWrapper>
      <InputFormWrapper
        onChange={onChangePhoneNumber}
        title="Phone number (with country code)"
        type="tel"
      ></InputFormWrapper>
      <InputFormWrapper
        onChange={onChangeEmail}
        title="Email"
        type="email"
      ></InputFormWrapper>
    </div>
  );
};

export default PaymentPage;
