const DATA_TOAN = {
  monHoc: "Toán Học THPT",
  maMon: "TOAN",
  khoiLop: [
    // =========================================================================
    // TOÁN LỚP 10 (CHƯƠNG TRÌNH GDPT 2018)
    // =========================================================================
    {
      lop: 10,
      chuong: [
        {
          tenChuong: "Chương I: Mệnh đề và Tập hợp",
          baiHoc: [
            {
              tenBai: "Bài 1: Mệnh đề",
              noiDung: [
                {
                  loai: "Định nghĩa",
                  tieuDe: "1. Mệnh đề và Mệnh đề chứa biến",
                  chiTiet: "• **Mệnh đề toán học** là một câu khẳng định có tính đúng hoặc sai xác định. Một mệnh đề không thể vừa đúng vừa sai.\n• **Mệnh đề chứa biến** là một câu khẳng định chưa thể xác định được tính đúng sai ngay, nhưng khi thay giá trị cụ thể của biến thì nó trở thành một mệnh đề."
                },
                {
                  loai: "Định nghĩa",
                  tieuDe: "2. Phủ định của một mệnh đề",
                  chiTiet: "Cho mệnh đề $P$. Mệnh đề \"Không phải $P$\" được gọi là **mệnh đề phủ định** của $P$, kí hiệu là $\\overline{P}$.\n• Nếu $P$ đúng thì $\\overline{P}$ sai; nếu $P$ sai thì $\\overline{P}$ đúng."
                },
                {
                  loai: "Định nghĩa",
                  tieuDe: "3. Mệnh đề kéo theo & Mệnh đề đảo",
                  chiTiet: "• Cho hai mệnh đề $P$ và $Q$. Mệnh đề \"Nếu $P$ thì $Q$\" được gọi là **mệnh đề kéo theo**, kí hiệu $P \\Rightarrow Q$. Mệnh đề $P \\Rightarrow Q$ chỉ sai khi $P$ đúng và $Q$ sai.\n• Mệnh đề $Q \\Rightarrow P$ được gọi là **mệnh đề đảo** của mệnh đề $P \\Rightarrow Q$."
                },
                {
                  loai: "Định lý",
                  tieuDe: "4. Điều kiện cần và điều kiện đủ",
                  chiTiet: "Khi $P \\Rightarrow Q$ là một định lý thì:\n• $P$ là **giả thiết**, $Q$ là **kết luận**.\n• $P$ là **điều kiện đủ** để có $Q$.\n• $Q$ là **điều kiện cần** để có $P$."
                },
                {
                  loai: "Định nghĩa",
                  tieuDe: "5. Mệnh đề tương đương & Kí hiệu $\\forall, \\exists$",
                  chiTiet: "• Nếu cả hai mệnh đề $P \\Rightarrow Q$ và $Q \\Rightarrow P$ đều đúng thì ta nói $P$ và $Q$ là hai **mệnh đề tương đương**, kí hiệu $P \\Leftrightarrow Q$ ($P$ là điều kiện cần và đủ để có $Q$).\n• Phủ định với mọi và tồn tại: $\\overline{\\forall x \\in X, P(x)} \\Leftrightarrow \\exists x \\in X, \\overline{P(x)}$ và $\\overline{\\exists x \\in X, P(x)} \\Leftrightarrow \\forall x \\in X, \\overline{P(x)}$."
                }
              ],
              viDu: "Xét mệnh đề $P: \"\\forall x \\in \\mathbb{R}, x^2 + 1 > 0\"$.\n• Tính đúng sai: Đúng vì $x^2 \\ge 0 \\Rightarrow x^2 + 1 \\ge 1 > 0, \\forall x \\in \\mathbb{R}$.\n• Mệnh đề phủ định: $\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0\"$."
            },
            {
              tenBai: "Bài 2: Tập hợp và các phép toán trên tập hợp",
              noiDung: [
                {
                  loai: "Định nghĩa",
                  tieuDe: "1. Tập hợp con và Hai tập hợp bằng nhau",
                  chiTiet: "• **Tập con:** $A \\subset B \\Leftrightarrow (\\forall x, x \\in A \\Rightarrow x \\in B)$.\n• **Tập bằng nhau:** $A = B \\Leftrightarrow (A \\subset B \\text{ và } B \\subset A)$.\n• Tập rỗng $\\varnothing$ là tập con của mọi tập hợp. Tập có $n$ phần tử có $2^n$ tập con."
                },
                {
                  loai: "Công thức",
                  tieuDe: "2. Các phép toán trên tập hợp",
                  chiTiet: "• **Giao:** $A \\cap B = \\{x \\mid x \\in A \\text{ và } x \\in B\\}$.\n• **Hợp:** $A \\cup B = \\{x \\mid x \\in A \\text{ hoặc } x \\in B\\}$.\n• **Hiệu:** $A \\setminus B = \\{x \\mid x \\in A \\text{ và } x \\notin B\\}$.\n• **Phần bù:** Khi $B \\subset A$, phần bù của $B$ trong $A$ là $C_A B = A \\setminus B$."
                },
                {
                  loai: "Công thức",
                  tieuDe: "3. Công thức tính số phần tử (Biểu đồ Ven)",
                  chiTiet: "$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$"
                }
              ],
              viDu: "Cho $A = (-2; 5]$ và $B = [1; 7)$. Ta có:\n• $A \\cap B = [1; 5]$\n• $A \\cup B = (-2; 7)$\n• $A \\setminus B = (-2; 1)$"
            }
          ]
        },
        {
          tenChuong: "Chương IV: Hệ thức lượng trong tam giác",
          baiHoc: [
            {
              tenBai: "Bài 1: Giá trị lượng giác của một góc từ 0° đến 180°",
              noiDung: [
                {
                  loai: "Định nghĩa",
                  tieuDe: "1. Định nghĩa giá trị lượng giác trên nửa đường tròn đơn vị",
                  chiTiet: "Với mỗi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), gọi $M(x_0; y_0)$ là điểm trên nửa đường tròn đơn vị sao cho $\\widehat{xOM} = \\alpha$. Khi đó:\n• $\\sin\\alpha = y_0$ ; $\\cos\\alpha = x_0$\n• $\\tan\\alpha = \\frac{y_0}{x_0} (\\alpha \\ne 90^\\circ)$ ; $\\cot\\alpha = \\frac{x_0}{y_0} (0^\\circ < \\alpha < 180^\\circ)$"
                },
                {
                  loai: "Công thức",
                  tieuDe: "2. Quan hệ giữa hai góc bù nhau ($\\alpha$ và $180^\\circ - \\alpha$)",
                  chiTiet: "• $\\sin(180^\\circ - \\alpha) = \\sin\\alpha$\n• $\\cos(180^\\circ - \\alpha) = -\\cos\\alpha$\n• $\\tan(180^\\circ - \\alpha) = -\\tan\\alpha$ ($\\alpha \\ne 90^\\circ$)\n• $\\cot(180^\\circ - \\alpha) = -\\cot\\alpha$ ($0^\\circ < \\alpha < 180^\\circ$)"
                }
              ],
              viDu: "Tính $\\cos 120^\\circ = \\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$."
            },
            {
              tenBai: "Bài 2: Định lí côsin và Định lí sin",
              noiDung: [
                {
                  loai: "Định lý",
                  tieuDe: "1. Định lí Côsin",
                  chiTiet: "Trong tam giác $ABC$ bất kì với $BC = a, CA = b, AB = c$, ta có:\n$$a^2 = b^2 + c^2 - 2bc\\cos A$$\n$$b^2 = a^2 + c^2 - 2ac\\cos B$$\n$$c^2 = a^2 + b^2 - 2ab\\cos C$$\n**Hệ quả:** $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$."
                },
                {
                  loai: "Định lý",
                  tieuDe: "2. Định lí Sin",
                  chiTiet: "Trong tam giác $ABC$ bất kì với $R$ là bán kính đường tròn ngoại tiếp:\n$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$"
                },
                {
                  loai: "Công thức",
                  tieuDe: "3. Các công thức tính diện tích tam giác ($S$)",
                  chiTiet: "• $S = \\frac{1}{2}a h_a = \\frac{1}{2}b h_b = \\frac{1}{2}c h_c$\n• $S = \\frac{1}{2}ab\\sin C = \\frac{1}{2}bc\\sin A = \\frac{1}{2}ac\\sin B$\n• $S = \\frac{abc}{4R}$\n• $S = p \\cdot r$ (với $p = \\frac{a+b+c}{2}$ là nửa chu vi, $r$ là bán kính đường tròn nội tiếp)\n• **Công thức Heron:** $S = \\sqrt{p(p-a)(p-b)(p-c)}$"
                }
              ],
              viDu: "Cho $\\Delta ABC$ có $a=5, b=6, c=7$. Nửa chu vi $p = \\frac{5+6+7}{2} = 9$.\nDiện tích $S = \\sqrt{9(9-5)(9-6)(9-7)} = \\sqrt{9 \\cdot 4 \\cdot 3 \\cdot 2} = 6\\sqrt{6}$."
            }
          ]
        }
      ]
    },

    // =========================================================================
    // TOÁN LỚP 11 (CHƯƠNG TRÌNH GDPT 2018)
    // =========================================================================
    {
      lop: 11,
      chuong: [
        {
          tenChuong: "Chương I: Hàm số lượng giác và Phương trình lượng giác",
          baiHoc: [
            {
              tenBai: "Bài 1: Công thức lượng giác cơ bản và biến đổi",
              noiDung: [
                {
                  loai: "Công thức",
                  tieuDe: "1. Công thức cộng",
                  chiTiet: "• $\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$\n• $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$\n• $\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$\n• $\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$\n• $\\tan(a - b) = \\frac{\\tan a - \\tan b}{1 + \\tan a \\tan b}$ ; $\\tan(a + b) = \\frac{\\tan a + \\tan b}{1 - \\tan a \\tan b}$"
                },
                {
                  loai: "Công thức",
                  tieuDe: "2. Công thức nhân đôi & Hạ bậc",
                  chiTiet: "• $\\sin 2a = 2\\sin a \\cos a$\n• $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$\n• $\\tan 2a = \\frac{2\\tan a}{1 - \\tan^2 a}$\n• **Hạ bậc:** $\\cos^2 a = \\frac{1 + \\cos 2a}{2}$ ; $\\sin^2 a = \\frac{1 - \\cos 2a}{2}$"
                },
                {
                  loai: "Công thức",
                  tieuDe: "3. Công thức biến đổi tích thành tổng và tổng thành tích",
                  chiTiet: "• $\\cos a \\cos b = \\frac{1}{2}[\\cos(a-b) + \\cos(a+b)]$\n• $\\sin a \\sin b = \\frac{1}{2}[\\cos(a-b) - \\cos(a+b)]$\n• $\\sin a \\cos b = \\frac{1}{2}[\\sin(a-b) + \\sin(a+b)]$\n• $\\cos u + \\cos v = 2\\cos\\frac{u+v}{2}\\cos\\frac{u-v}{2}$\n• $\\cos u - \\cos v = -2\\sin\\frac{u+v}{2}\\sin\\frac{u-v}{2}$\n• $\\sin u + \\sin v = 2\\sin\\frac{u+v}{2}\\cos\\frac{u-v}{2}$\n• $\\sin u - \\sin v = 2\\cos\\frac{u+v}{2}\\sin\\frac{u-v}{2}$"
                }
              ],
              viDu: "Rút gọn $A = \\sin 3x + \\sin x = 2\\sin\\frac{3x+x}{2}\\cos\\frac{3x-x}{2} = 2\\sin 2x \\cos x$."
            },
            {
              tenBai: "Bài 2: Phương trình lượng giác cơ bản",
              noiDung: [
                {
                  loai: "Công thức",
                  tieuDe: "Nghiệm của 4 phương trình lượng giác cơ bản ($k \\in \\mathbb{Z}$)",
                  chiTiet: "• $\\sin x = \\sin\\alpha \\Leftrightarrow \\left[\\begin{array}{l} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{array}\\right.$\n• $\\cos x = \\cos\\alpha \\Leftrightarrow x = \\pm\\alpha + k2\\pi$\n• $\\tan x = \\tan\\alpha \\Leftrightarrow x = \\alpha + k\\pi$ ($x, \\alpha \\ne \\frac{\\pi}{2} + k\\pi$)\n• $\\cot x = \\cot\\alpha \\Leftrightarrow x = \\alpha + k\\pi$ ($x, \\alpha \\ne k\\pi$)"
                }
              ],
              viDu: "Giải $\\cos 2x = \\frac{1}{2} \\Leftrightarrow \\cos 2x = \\cos\\frac{\\pi}{3} \\Leftrightarrow 2x = \\pm\\frac{\\pi}{3} + k2\\pi \\Leftrightarrow x = \\pm\\frac{\\pi}{6} + k\\pi$ ($k \\in \\mathbb{Z}$)."
            }
          ]
        },
        {
          tenChuong: "Chương II: Dãy số - Cấp số cộng - Cấp số nhân",
          baiHoc: [
            {
              tenBai: "Bài 1: Cấp số cộng (CSC) và Cấp số nhân (CSN)",
              noiDung: [
                {
                  loai: "Định nghĩa",
                  tieuDe: "1. Cấp số cộng (công sai $d$)",
                  chiTiet: "• **Định nghĩa:** $u_{n+1} = u_n + d$ ($\\forall n \\in \\mathbb{N}^*$).\n• **Số hạng tổng quát:** $u_n = u_1 + (n - 1)d$ ($n \\ge 2$).\n• **Tính chất:** $u_k = \\frac{u_{k-1} + u_{k+1}}{2}$ ($k \\ge 2$).\n• **Tổng $n$ số hạng đầu:** $S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n-1)d]}{2}$."
                },
                {
                  loai: "Định nghĩa",
                  tieuDe: "2. Cấp số nhân (công bội $q$)",
                  chiTiet: "• **Định nghĩa:** $u_{n+1} = u_n \\cdot q$ ($\\forall n \\in \\mathbb{N}^*$).\n• **Số hạng tổng quát:** $u_n = u_1 \\cdot q^{n-1}$ ($n \\ge 2$).\n• **Tính chất:** $u_k^2 = u_{k-1} \\cdot u_{k+1}$ ($k \\ge 2$).\n• **Tổng $n$ số hạng đầu ($q \\ne 1$):** $S_n = \\frac{u_1(1 - q^n)}{1 - q}$."
                }
              ],
              viDu: "Cho CSN có $u_1 = 3, q = 2$. Số hạng thứ 5 là $u_5 = 3 \\cdot 2^4 = 48$. Tổng 5 số hạng đầu là $S_5 = \\frac{3(1 - 2^5)}{1 - 2} = 93$."
            }
          ]
        }
      ]
    },

    // =========================================================================
    // TOÁN LỚP 12 (CHƯƠNG TRÌNH GDPT 2018)
    // =========================================================================
    {
      lop: 12,
      chuong: [
        {
          tenChuong: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
          baiHoc: [
            {
              tenBai: "Bài 1: Tính đơn điệu và Cực trị của hàm số",
              noiDung: [
                {
                  loai: "Định lý",
                  tieuDe: "1. Điều kiện cần và đủ để hàm số đơn điệu",
                  chiTiet: "Cho hàm số $y = f(x)$ có đạo hàm trên khoảng $K$:\n• Nếu $f'(x) > 0, \\forall x \\in K$ thì $f(x)$ **đồng biến** trên $K$.\n• Nếu $f'(x) < 0, \\forall x \\in K$ thì $f(x)$ **nghịch biến** trên $K$.\n• **Mở rộng:** Nếu $f'(x) \\ge 0$ (hoặc $f'(x) \\le 0$) trên $K$ và $f'(x) = 0$ chỉ tại một số hữu hạn điểm thì hàm số đồng biến (hoặc nghịch biến) trên $K$."
                },
                {
                  loai: "Định lý",
                  tieuDe: "2. Điều kiện đủ để hàm số đạt cực trị",
                  chiTiet: "Giả sử hàm số $y = f(x)$ liên tục trên khoảng $(a; b)$ chứa điểm $x_0$ và có đạo hàm trên $(a; b) \\setminus \\{x_0\\}$:\n• Nếu $f'(x)$ đổi dấu từ **dương sang âm** khi đi qua $x_0$ thì $x_0$ là điểm **cực đại** của hàm số.\n• Nếu $f'(x)$ đổi dấu từ **âm sang dương** khi đi qua $x_0$ thì $x_0$ là điểm **cực tiểu** của hàm số."
                }
              ],
              viDu: "Xét $y = x^3 - 3x + 2$. Ta có $y' = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$.\n• Hàm số đồng biến trên $(-\\infty; -1)$ và $(1; +\\infty)$, nghịch biến trên $(-1; 1)$.\n• Điểm cực đại $x_{CĐ} = -1 \\Rightarrow y_{CĐ} = 4$; Điểm cực tiểu $x_{CT} = 1 \\Rightarrow y_{CT} = 0$."
            },
            {
              tenBai: "Bài 2: Đường tiệm cận của đồ thị hàm số",
              noiDung: [
                {
                  loai: "Định nghĩa",
                  tieuDe: "1. Tiệm cận ngang (TCN) và Tiệm cận đứng (TCĐ)",
                  chiTiet: "• **TCN:** Đường thẳng $y = y_0$ là TCN của đồ thị $y = f(x)$ nếu $\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0$.\n• **TCĐ:** Đường thẳng $x = x_0$ là TCĐ của đồ thị $y = f(x)$ nếu ít nhất một trong các giới hạn $\\lim_{x \\to x_0^+} f(x)$, $\\lim_{x \\to x_0^-} f(x)$ bằng $+\\infty$ hoặc $-\\infty$."
                },
                {
                  loai: "Định nghĩa",
                  tieuDe: "2. Tiệm cận xiên (TCX - Mới trong GDPT 2018)",
                  chiTiet: "• Đường thẳng $y = ax + b$ ($a \\ne 0$) được gọi là **tiệm cận xiên** của đồ thị hàm số $y = f(x)$ nếu:\n$$\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} [f(x) - (ax + b)] = 0$$\n• **Công thức xác định $a, b$:** $a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}$ và $b = \\lim_{x \\to \\pm\\infty} [f(x) - ax]$."
                }
              ],
              viDu: "Tìm TCX của $y = \\frac{x^2 + 2x - 1}{x - 1}$. Chia đa thức ta được $y = x + 3 + \\frac{2}{x - 1}$.\nVì $\\lim_{x \\to \\pm\\infty} \\frac{2}{x - 1} = 0$ nên đường thẳng $y = x + 3$ là tiệm cận xiên của đồ thị."
            }
          ]
        },
        {
          tenChuong: "Chương IV: Nguyên hàm và Tích phân",
          baiHoc: [
            {
              tenBai: "Bài 1: Nguyên hàm và Bảng công thức nguyên hàm cơ bản",
              noiDung: [
                {
                  loai: "Định nghĩa",
                  tieuDe: "1. Định nghĩa và Tính chất nguyên hàm",
                  chiTiet: "• Cho hàm số $f(x)$ xác định trên $K$. Hàm số $F(x)$ được gọi là **nguyên hàm** của $f(x)$ trên $K$ nếu $F'(x) = f(x), \\forall x \\in K$.\n• **Họ nguyên hàm:** $\\int f(x)dx = F(x) + C$ ($C \\in \\mathbb{R}$)."
                },
                {
                  loai: "Công thức",
                  tieuDe: "2. Bảng nguyên hàm cơ bản cần nhớ",
                  chiTiet: "• $\\int x^\\alpha dx = \\frac{x^{\\alpha+1}}{\\alpha+1} + C$ ($\\alpha \\ne -1$)\n• $\\int \\frac{1}{x} dx = \\ln|x| + C$\n• $\\int e^x dx = e^x + C$ ; $\\int a^x dx = \\frac{a^x}{\\ln a} + C$ ($0 < a \\ne 1$)\n• $\\int \\cos x dx = \\sin x + C$ ; $\\int \\sin x dx = -\\cos x + C$\n• $\\int \\frac{1}{\\cos^2 x} dx = \\tan x + C$ ; $\\int \\frac{1}{\\sin^2 x} dx = -\\cot x + C$"
                }
              ],
              viDu: "Tìm $\\int (3x^2 - \\frac{2}{x} + e^x) dx = x^3 - 2\\ln|x| + e^x + C$."
            },
            {
              tenBai: "Bài 2: Tích phân và Ứng dụng hình học",
              noiDung: [
                {
                  loai: "Định lý",
                  tieuDe: "1. Công thức Newton - Leibniz",
                  chiTiet: "Nếu $f(x)$ liên tục trên $[a; b]$ và $F(x)$ là một nguyên hàm của $f(x)$ trên $[a; b]$ thì:\n$$\\int_a^b f(x)dx = F(x)\\Big|_a^b = F(b) - F(a)$$"
                },
                {
                  loai: "Công thức",
                  tieuDe: "2. Diện tích hình phẳng và Thể tích khối tròn xoay",
                  chiTiet: "• **Diện tích hình phẳng** giới hạn bởi $y = f(x), y = g(x)$ và hai đường $x = a, x = b$:\n$$S = \\int_a^b |f(x) - g(x)| dx$$\n• **Thể tích khối tròn xoay** khi quay hình phẳng giới hạn bởi $y = f(x), y = 0, x = a, x = b$ quanh trục $Ox$:\n$$V = \\pi \\int_a^b [f(x)]^2 dx$$"
                }
              ],
              viDu: "Tính $I = \\int_1^2 2x dx = x^2\\Big|_1^2 = 2^2 - 1^2 = 3$."
            }
          ]
        }
      ]
    }
  ]
};