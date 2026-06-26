export interface OrderFormData {
  fullName: string;
  phoneNumber: string;
  altPhoneNumber: string;
  deliveryAddress: string;
  packageId: string;
}

export interface PackageOption {
  id: string;
  name: string;
  badge: string;
  quantity: number;
  originalPrice: number;
  salePrice: number;
  saveAmount: number;
  description: string;
  isPopular: boolean;
  imageAlt: string;
  gift?: string;
}

export interface OrderRecord {
  id: string;
  formData: OrderFormData;
  timestamp: string;
  status: 'pending' | 'completed' | 'canceled';
  packageDetails: PackageOption;
}
