import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from '@reduxjs/toolkit';
import {carService} from "../../services/carService";

const initialState = {
    cars: [],
    trigger: null,
    carForUpdate: null,
    loading: null,
    error: null
};

const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();
            return data

        } catch (e) {
            const error = e.response.data;
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const create = createAsyncThunk(
    'carsSlice/create',
    async ({car}, thunkAPI) => {
        try {
            const {data} = carService.create(car);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })

const updateById = createAsyncThunk(
    'carsSlice/updateById',
    async ({id, carData}, thunkAPI) => {
        try {
            const {data} = await carService.updateById(id, carData);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const deleteByID = createAsyncThunk(
    'carsSlice/deleteByID',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)


const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(updateById.fulfilled, state => {
                state.carForUpdate = null
            })


            .addMatcher(isFulfilled(create, updateById,deleteByID), state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isFulfilled(getAll), state => {
                state.loading = false
            })
            .addMatcher(isPending(getAll, create), state => {
                state.loading = true
            })
            .addMatcher(isRejected(getAll), (state, action) => {
                state.loading = false
                state.error = action.payload.detail
            })
    }
});

const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions,
    getAll,
    create,
    updateById,
    deleteByID
};

export {carsReducer, carsActions};
