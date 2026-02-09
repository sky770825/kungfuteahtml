@echo off
REM 版本更新腳本

echo ========================================
echo           版本更新工具
echo ========================================
echo.

REM 讀取當前版本
for /f "tokens=2 delims=:" %%a in ('findstr "當前版本" VERSION.md') do set "current_version=%%a"
set "current_version=%current_version: =%"

echo 當前版本: %current_version%
echo.

REM 顯示選項
echo 請選擇更新類型:
echo 1. 主版本 (重大更新)
echo 2. 次版本 (新功能)
echo 3. 修訂版本 (修復)
echo 4. 自定義版本號
echo.

set /p choice="請輸入選項 (1-4): "

if "%choice%"=="1" goto major
if "%choice%"=="2" goto minor
if "%choice%"=="3" goto patch
if "%choice%"=="4" goto custom
goto invalid

:major
echo 更新主版本...
REM 這裡可以添加自動更新主版本的邏輯
echo 請手動更新 VERSION.md 文件
goto end

:minor
echo 更新次版本...
REM 這裡可以添加自動更新次版本的邏輯
echo 請手動更新 VERSION.md 文件
goto end

:patch
echo 更新修訂版本...
REM 這裡可以添加自動更新修訂版本的邏輯
echo 請手動更新 VERSION.md 文件
goto end

:custom
set /p new_version="請輸入新版本號 (例如: v2.1.0): "
echo 新版本: %new_version%
echo 請手動更新 VERSION.md 文件
goto end

:invalid
echo 無效選項，請重新運行腳本
goto end

:end
echo.
echo 版本更新完成！
echo 請記得更新 VERSION.md 文件
pause
