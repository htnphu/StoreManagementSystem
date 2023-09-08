// controller/storeController.js
import Store from '../models/Store.js';

export const createNewStore = async (req, res, next) => {
  const newStore = req.body;

  try {
    /* 
      if findStore by email is existed 
      then replace line 13 with const existingStore = await findStore(newStore.email) 
      and return code: 409
    */
    const existingStore = await Store.findOne({ where: { email: newStore.email } });
    if (existingStore) {
      // A store with the same email already exists, return a conflict response
      return res.status(409).json({ message: 'A Store with this email already exists.' });
    }

    const store = await Store.create({ 
      name: newStore.name,
      logo: newStore.logo,
      address: newStore.address,
      phoneNumber: newStore.phoneNumber,
      email: newStore.email,
      ownerId: newStore.ownerId,  
    });

    return res.status(201).json({ message: 'New store created successfully!', store });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to create a new store' });
  }
};

export const findStoresByOwnerId = async (req, res) => {
  try {
    const ownerId = req.params.ownerId;

    const stores = await Store.findAll({ where: { ownerId } });

    if (!stores || stores.length === 0) {
      return res.status(404).json({ message: 'Can not find store by this owner id.' });
    }

    return res.status(200).json(stores);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Could not find store or store have not been created.' });
  }
};
