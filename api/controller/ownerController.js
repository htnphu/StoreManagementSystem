// controller/ownerController.js
import Owner from '../models/Owner.js'
import generateUniqueId from '../utils/utils.js';

export const registerOwner = async (req, res, next) => {
  const newOwner = req.body;

  try {
    /* 
      if findOwner by email is existed 
      then replace line 14 with const existingOwner = awaifindOwner(newOwner.email) 
      and return code: 409
    */
    const existingOwner = await Owner.findOne({ where: { email: newOwner.email } });
    if (existingOwner) {
      // An owner with the same email already exists, return a conflict response
      return res.status(409).json({ message: 'An owner with this email already exists.' });
    }

    const uniqueId = generateUniqueId(); 
    const owner = await Owner.create({
      fullName: newOwner.fullName,
      phoneNumber: newOwner.phoneNumber,
      email: newOwner.email,
      dateOfBirth: newOwner.dateOfBirth,
      avatar: newOwner.avatar,
      gender: newOwner.gender,
      uniqueId: uniqueId, 
    });

    res.status(201).json({ message: 'Register new owner successfully!', owner });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to register new owner' });
  }
};
