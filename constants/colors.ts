export const Colors = {
    // Primary Colors
    primary: '#3498db',       // Ana mavi
    primaryLight: '#5dade2',  // Açık mavi
    primaryDark: '#2980b9',   // Koyu mavi
  
    // Secondary Colors
    secondary: '#2ecc71',     // Ana yeşil
    secondaryLight: '#58d68d',// Açık yeşil
    secondaryDark: '#27ae60', // Koyu yeşil
  
    // Status Colors
    success: '#27ae60',       // Başarı yeşili
    warning: '#f39c12',       // Uyarı turuncusu
    danger: '#e74c3c',        // Hata kırmızısı
    dangerLight: '#fadbd8',   // Açık kırmızı
  
    // Grayscale
    dark: '#2c3e50',          // Koyu gri
    light: '#ecf0f1',         // Açık gri
    placeholder: '#95a5a6',   // Gri placeholder
    white: '#ffffff',
    black: '#000000',
  
    // Additional
    background: '#f5f5f5',    // Arkaplan rengi
    border: '#d5dbdb',        // Çerçeve rengi
  };
  
  export const IbanInputColors = {
    normal: {
      border: Colors.border,
      background: Colors.white,
      text: Colors.dark,
    },
    focused: {
      border: Colors.primary,
      background: Colors.white,
      text: Colors.dark,
    },
    error: {
      border: Colors.danger,
      background: Colors.dangerLight,
      text: Colors.dark,
    },
    valid: {
      border: Colors.success,
      background: Colors.white,
      text: Colors.dark,
    },
    container:{
        background: Colors.background,
        border: Colors.border,
    },
    placeholder: Colors.placeholder,
  };