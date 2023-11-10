module.exports = {
  root: true,
  extends: '@react-native',
  rules: {},
  env: {
    development: {
      // Tắt ESLint khi ở chế độ phát triển
      eslintrc: false,
    },
    production: {
      // Cấu hình ESLint khi ở chế độ sản xuất
    },
  }
}