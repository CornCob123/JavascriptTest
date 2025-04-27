type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T];

function validateRequiredFields<T>(obj: Partial<T>) {
  const requiredKeys = Object.keys(obj).filter(key => 
    obj[key as keyof T] === undefined || obj[key as keyof T] === null
  ) as Array<RequiredKeys<T>>;
  
  if (requiredKeys.length > 0) {
    throw new Error(`Missing required fields: ${requiredKeys.join(', ')}`);
  }
}