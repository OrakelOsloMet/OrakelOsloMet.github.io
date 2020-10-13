export const objectConditionalByEnvironment = (devObject = null, productionObject = null) => {
    return process.env.NODE_ENV === "production" ? productionObject : devObject;
};