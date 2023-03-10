# 快速上手：调整要素权重
请确保您已了解 JSON 或 JS 对象相关知识再阅读本文。

所有要素的数据都存放在 `js/moeyooso.js` 中，编辑此文件即可调整要素权重。

该文件中存储了一串JSON，虽然严格来讲应该叫做 “对象”。第一至第二层对象一般都是分组，不存储要素数据。直到第三层开始出现数组（上一层对象的括号变为方括号 `[]`），这里便是要素数据。

例如，您可以根据嵌套关系依次找到 `physique`（体格）、`height`（身高），然后才是要素数据。

每一条要素数据都有 `name`（名称）字段和 `weight`（权重）字段，若有其他信息暂且不管，这不重要。**修改 `weight` 字段中的数值即可调整权重**，设为 0 则该要素不会被抽中。

----

注：如果您悟性达到了一定程度，其实应该不难理解 `wm`（Weight Modify，权重修正）字段可以使当前要素被抽中时改变其他要素的权重。