import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Form {
  name?: string;
  city?: string;
  address?: string;
  postcode?: string;
  phoneNumber?: string;
  email?: string;
}

export interface FormSchema {
  form: Form;
}

const initialState: FormSchema = {
  form: {
    name: "",
    city: "",
    address: "",
    postcode: "",
    phoneNumber: "",
    email: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Form>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  // extraReducers: (builder) => {
  // builder
  //   .addCase(fetchProfileData.pending, (state) => {
  //     state.error = undefined;
  //     state.isLoading = true;
  //   })
  //   .addCase(
  //     fetchProfileData.fulfilled,
  //     (state, action: PayloadAction<Profile>) => {
  //       state.isLoading = false;
  //       state.data = action.payload;
  //       state.form = action.payload;
  //     }
  //   )
  //   .addCase(fetchProfileData.rejected, (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   })
  //   .addCase(updateProfileData.pending, (state) => {
  //     state.validateErrors = undefined;
  //     state.isLoading = true;
  //   })
  //   .addCase(
  //     updateProfileData.fulfilled,
  //     (state, action: PayloadAction<Profile>) => {
  //       state.isLoading = false;
  //       state.data = action.payload;
  //       state.form = action.payload;
  //       state.readonly = true;
  //       state.validateErrors = undefined;
  //     }
  //   )
  //   .addCase(updateProfileData.rejected, (state, action) => {
  //     state.isLoading = false;
  //     state.validateErrors = action.payload;
  //   });
  // },
});

// Action creators are generated for each case reducer function
export const { actions: formActions } = formSlice;
export const { reducer: formReducer } = formSlice;
